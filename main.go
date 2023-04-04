package main

import (
	"accessibilitymap/controllers/pincontroller"
	db "accessibilitymap/db"
	"fmt"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"log"
)

func main() {
	fmt.Println("Starting server...")
	var err error
	err = db.ConnectToMongoDB()
	if err != nil {
		log.Fatal("Failed to connect to MongoDB:", err)
	}
	defer db.CloseMongoDBConnection()

	engine := gin.Default()
	engine.ForwardedByClientIP = true

	engine.Use(cors.Default())

	fmt.Println("Server is running on port 8080")

	engine.GET("/pins/:id", pincontroller.GetPin)
	engine.POST("/pins", pincontroller.AddPin)
	engine.GET("/pins/location", pincontroller.GetPinByLocation)

	engine.Run()
}
