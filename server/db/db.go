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
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017/accessibilitymap?authSource=admin")

	// Connect to MongoDB
	client, err := mongo.Connect(context.TODO(), clientOptions)
	MongoClient = client
	if err != nil {
		return err
	}

	// Check the connection
	err = client.Ping(context.TODO(), nil)

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
