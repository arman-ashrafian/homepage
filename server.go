package main

import (
	"errors"
	"flag"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"

	"github.com/labstack/echo"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	drive "google.golang.org/api/drive/v3"
)

const indexHTML = "frontend/dist/index.html"

var (
	googleOauthConfig = &oauth2.Config{
		RedirectURL:  "http://localhost/GoogleCallback",
		ClientID:     os.Getenv("drive_id"),
		ClientSecret: os.Getenv("drive_secret"),
		Scopes: []string{
			"https://www.googleapis.com/auth/drive",
			"https://www.googleapis.com/auth/drive.file",
		},
		Endpoint: google.Endpoint,
	}
	// Some random string, random for each request
	oauthStateString = "random"
	// authorized drive service
	driveService *drive.Service
)

func main() {
	// parse flags
	portPtr := flag.String("port", ":80", "server port")
	flag.Parse()

	// start server
	e := echo.New()
	fmt.Println("Starting server")

	// static assets
	e.Static("/", "frontend/dist/")

	// all routes in for vue router
	e.File("/", indexHTML)
	e.File("/about", indexHTML)

	// routes
	e.GET("/GoogleLogin", handleGoogleLogin)
	e.GET("/GoogleCallback", handleGoogleCallback)

	// api
	e.GET("/journal/:month/:day/:year", handleGetJournal)
	e.PUT("/journal/:month/:day/:year", handlePutJournal)

	e.Logger.Fatal(e.Start(*portPtr))
}

// redirects user to google login
func handleGoogleLogin(c echo.Context) error {
	url := googleOauthConfig.AuthCodeURL(oauthStateString)
	return c.Redirect(http.StatusTemporaryRedirect, url)
}

// this is called after user logs into google,
// creates global driveService and redirects to '/'
func handleGoogleCallback(c echo.Context) error {
	code := c.FormValue("code")
	tok, _ := googleOauthConfig.Exchange(oauth2.NoContext, code)
	client := oauth2.NewClient(oauth2.NoContext, oauth2.StaticTokenSource(tok))

	driveService, _ = drive.New(client)

	return c.Redirect(http.StatusPermanentRedirect, "/")
}

// API: GET 'journal/:month/:day/:year
// If the file exists it returns the text file contents. Otherwise it returns
// an empty string.
func handleGetJournal(c echo.Context) error {
	fileName := fmt.Sprintf("%s%s%s.txt", c.Param("month"), c.Param("day"), c.Param("year"))
	folderID, _ := getJournalFolderID()
	query := fmt.Sprintf("name = '%s' and '%s' in parents", fileName, folderID)

	fileQ, err := driveService.Files.List().Q(query).Do()
	if err != nil {
		return err
	}

	respStr := ""
	// file exists
	if len(fileQ.Files) > 0 {
		// return file data
		resp, _ := driveService.Files.Get(fileQ.Files[0].Id).Download()
		defer resp.Body.Close()

		body, _ := ioutil.ReadAll(resp.Body)
		respStr = string(body)
	}

	return c.String(http.StatusOK, respStr)
}

// JSON request for saving journal
type putJournalRequest struct {
	Body string `json:"body"`
}

// API: PUT 'journal/:month/:day/:year
// check if the file exists and either update or create a new file.
func handlePutJournal(c echo.Context) error {
	fileName := fmt.Sprintf("%s%s%s.txt", c.Param("month"), c.Param("day"), c.Param("year"))
	folderID, _ := getJournalFolderID()
	query := fmt.Sprintf("name = '%s' and '%s' in parents", fileName, folderID)

	fileQ, err := driveService.Files.List().Q(query).Do()
	if err != nil {
		return err
	}

	req := new(putJournalRequest)
	if err := c.Bind(req); err != nil {
		return err
	}

	bodyReader := strings.NewReader(req.Body)
	updatedFile := drive.File{Name: fileName}

	// file exists
	if len(fileQ.Files) > 0 {
		driveService.Files.Update(fileQ.Files[0].Id, &updatedFile).
			Media(bodyReader).Do()
	} else { // file does not exist
		id, _ := createFile(fileName)
		driveService.Files.Update(id, &updatedFile).
			Media(bodyReader).Do()
	}

	return nil
}

// returns the ID for the 'homepage-journal' folder in google drive
func getJournalFolderID() (string, error) {
	// query GDrive for homepage-journal folder
	folderQ, err := driveService.Files.List().Q(`
		name = 'homepage-journals' and
		mimeType = 'application/vnd.google-apps.folder'`,
	).Do()

	if err != nil {
		return "", errors.New("couldnt get folder")
	}

	return folderQ.Files[0].Id, nil
}

// create file in google drive homepage-journal folder and return the ID
func createFile(name string) (string, error) {
	folderID, _ := getJournalFolderID()

	// file in homepage-journal folder
	file := drive.File{Name: name, Parents: []string{folderID}}
	// create file in GDrive
	createdFile, err2 := driveService.Files.Create(&file).Do()

	if err2 != nil {
		return "", errors.New("could not create file")
	}

	return createdFile.Id, nil
}
