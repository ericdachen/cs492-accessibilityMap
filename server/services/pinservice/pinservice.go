package pinservice

import (
	"accessibilitymap/db"
	"accessibilitymap/types"
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
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

func AddPin(pin types.IPin) (*types.IPin, error) {
	var pinCollection = db.MongoClient.Database("local").Collection("pins")
	result, err := pinCollection.InsertOne(context.Background(), pin)
	if err != nil {
		log.Printf("Error inserting pin: %v\n", err)
		return nil, err
	}
	var newPinId = result.InsertedID.(primitive.ObjectID).Hex()
	pin.Id = newPinId
	return &pin, nil
}

func GetPinByLocation(location types.IGeoCode, radius float64) ([]types.IPin, error) {
	var pinCollection = db.MongoClient.Database("local").Collection("pins")
	filter := bson.M{
		"geoCode": bson.M{
			"$geoNear": bson.M{
				"$geometry": bson.M{
					"type":        "Point",
					"coordinates": []float64{location.Longitude, location.Latitude},
				},
				"$maxDistance": radius, //meters
			},
		},
	}
	context, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var results []types.IPin
	cursor, err := pinCollection.Find(context, filter)
	if err != nil {
		log.Printf("Error retrieving pins: %v\n", err)
		return nil, err
	}
	err = cursor.All(context, &results)
	if err != nil {
		log.Printf("Error retrieving pins: %v\n", err)
		return nil, err
	}
	return results, nil
}
