package pinservice

import (
	"accessibilitymap/db"
	"accessibilitymap/types"
	"context"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
	"log"
	"time"
)

func GetPinsByCriteria(searchCriteria types.IPinSearchCriteria) ([]types.IPin, error) {
	var pinCollection = db.MongoClient.Database("local").Collection("pins")

	filter := bson.M{}

	if searchCriteria.Name != "" {
		filter["name"] = searchCriteria.Name
	}

	if searchCriteria.StarRating != 0 {
		filter["starRating"] = searchCriteria.StarRating
	}

	if len(searchCriteria.Traits) > 0 {
		filter["traits"] = bson.M{"$all": searchCriteria.Traits}
	}

	context, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := pinCollection.Find(context, filter, options.Find())
	if err != nil {
		log.Printf("Error retrieving pins: %v\n", err)
		return nil, err
	}
	defer cursor.Close(context)

	var pins []types.IPin = make([]types.IPin, 0)
	for cursor.Next(context) {
		var pin types.IPin
		err := cursor.Decode(&pin)
		if err != nil {
			log.Printf("Error decoding pin: %v\n", err)
			return nil, err
		}
		pins = append(pins, pin)
	}

	return pins, nil
}

func GetPinById(pinId string) (*types.IPin, error) {
	var pinCollection = db.MongoClient.Database("local").Collection("pins")

	// create an ObjectID from the ID string
	id, err := primitive.ObjectIDFromHex(pinId)
	if err != nil {
		log.Printf("Error parsing pin id: %v\n", err)
		return nil, err
	}

	filter := bson.M{"_id": id}

	context, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var result types.IPin
	err = pinCollection.FindOne(context, filter).Decode(&result)
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

func DeletePin(pinId string) error {
	var pinCollection = db.MongoClient.Database("local").Collection("pins")
	// create an ObjectID from the ID string
	id, err := primitive.ObjectIDFromHex(pinId)
	if err != nil {
		log.Printf("Error parsing pin id: %v\n", err)
		return err
	}

	filter := bson.M{"_id": id}

	context, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	_, err = pinCollection.DeleteOne(context, filter)
	if err != nil {
		log.Printf("Error deleting pin: %v\n", err)
		return err
	}
	return nil
}

func UpdatePin(pinId string, newPin types.IPin) (*types.IPin, error) {
	var pinCollection = db.MongoClient.Database("local").Collection("pins")
	// create an ObjectID from the ID string
	id, err := primitive.ObjectIDFromHex(pinId)
	if err != nil {
		log.Printf("Error parsing pin id: %v\n", err)
		return nil, err
	}

	filter := bson.M{"_id": id}

	context, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	update := bson.M{
		"$set": bson.M{
			"geoCode": bson.M{
				"latitude":  newPin.GeoCode.Latitude,
				"longitude": newPin.GeoCode.Longitude,
			},
			"name":       newPin.Name,
			"starRating": newPin.StarRating,
			"traits":     newPin.Traits,
		},
	}

	options := options.FindOneAndUpdate().SetReturnDocument(options.After)

	var updatedPin types.IPin
	err = pinCollection.FindOneAndUpdate(context, filter, update, options).Decode(&updatedPin)
	if err != nil {
		log.Printf("Error updating pin: %v\n", err)
		return nil, err
	}
	return &updatedPin, nil
}
