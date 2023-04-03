package pinservice

import (
	"accessibilitymap/db"
	"accessibilitymap/types"
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"log"
	"time"
)

func GetPin(pinId string) (*types.IPin, error) {
	var pinCollection = db.MongoClient.Database("local").Collection("pins")
	filter := bson.D{{"id", pinId}}

	context, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var result types.IPin
	err := pinCollection.FindOne(context, filter).Decode(&result)
	if err != nil {
		log.Printf("Error retrieving pin: %v\n", err)
		return nil, err
	}
	return &result, nil
}
