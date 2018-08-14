package main

import (
	"errors"
	"fmt"
	"net/http"
	"os"

	"github.com/labstack/echo"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/google"
	drive "google.golang.org/api/drive/v3"
)

const (
	port      = ":5500"
	indexHTML = "frontend/dist/index.html"
)

var (
	googleOauthConfig = &oauth2.Config{
		RedirectURL:  "http://localhost:5500/GoogleCallback",
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

	e.Logger.Fatal(e.Start(port))
}

func handleGoogleLogin(c echo.Context) error {
	url := googleOauthConfig.AuthCodeURL(oauthStateString)
	c.Redirect(http.StatusTemporaryRedirect, url)
	return nil
}

func handleGoogleCallback(c echo.Context) error {
	code := c.FormValue("code")
	tok, _ := googleOauthConfig.Exchange(oauth2.NoContext, code)
	client := oauth2.NewClient(oauth2.NoContext, oauth2.StaticTokenSource(tok))

	driveService, _ = drive.New(client)

	return c.Redirect(http.StatusPermanentRedirect, "/")
}

func handleGetJournal(c echo.Context) error {
	fmt.Println("getting journals")

	fileName := fmt.Sprintf("%s%s%s", c.Param("month"), c.Param("day"), c.Param("year"))
	folderID, _ := getJournalFolderID()
	query := fmt.Sprintf("name = '%s' and '%s' in parents", fileName, folderID)
	fileQ, err := driveService.Files.List().Q(query).Do()

	if err != nil {
		fmt.Println("error")
	}

	fmt.Println("SIZE OF FILES[] -> " + string(len(fileQ.Files)))

	return c.Redirect(http.StatusPermanentRedirect, "/")
}

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
