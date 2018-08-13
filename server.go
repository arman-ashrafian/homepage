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
	fileList, _ := driveService.Files.List().Do()

	for _, i := range fileList.Files {
		fmt.Println(i.Name)
	}

	createFile("BIGBOOTYBITCHES.txt")

	return c.String(http.StatusOK, "Fuck Yas")
}

func createFile(name string) error {
	file := drive.File{Name: name}

	fileLis, err := driveService.Files.List().Q(
		"name = 'homepage-journals' and mimeType = 'application/vnd.google-apps.folder'",
	).Do()

	if err != nil {
		fmt.Println("couldnt get folder")
	}

	fmt.Println("FOLDER ID :: " + fileLis.Files[0].Id)

	cr, err := driveService.Files.Create(&file).Do()
	if err != nil {
		return errors.New("could not create file")
	}

	fmt.Println("FILE ID :: " + cr.Id)
	return nil
}
