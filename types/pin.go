package types

type IPin struct {
	Id      string   `json:"id" bson:"id"`
	GeoCode IGeoCode `json:"geocode" bson:"geoCode"`
}
