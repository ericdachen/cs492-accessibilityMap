package db

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectToMongoDB() error {
	// Set client options
	clientOptions := options.Client().ApplyURI("mongodb://mongo:27017/accessibilitymap?authSource=admin")

	// Connect to MongoDB
	MongoClient, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		return err
	}

	// Check the connection
	err = MongoClient.Ping(context.TODO(), nil)

	if err != nil {
		return err
	}

	fmt.Println("Connected to MongoDB!")
	return nil
}

func CloseMongoDBConnection() {
	err := MongoClient.Disconnect(context.TODO())
	if err != nil {
		log.Fatal(err)
	}
}

var MongoClient *mongo.Client
