package main

import (
	"fmt"

	"github.com/labstack/echo"
)

const (
	port      = ":5500"
	indexHTML = "frontend/dist/index.html"
)

func main() {
	e := echo.New()
	fmt.Println("Starting server")

	// static assets
	e.Static("/", "frontend/dist/")

	// all routes in for vue router
	e.File("/", indexHTML)
	e.File("/about", indexHTML)

	e.Logger.Fatal(e.Start(port))
}
