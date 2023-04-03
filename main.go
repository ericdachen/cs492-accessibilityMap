package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {

	engine := gin.Default()
	engine.ForwardedByClientIP = true

	engine.Use(cors.Default())

	// engine.POST("/plan-trip", tripplancontroller.Plantrip)

	engine.Run()
}
