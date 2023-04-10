package types

type IPin struct {
	Id          string   `json:"id" bson:"_id,omitempty"`
	GeoCode     IGeoCode `json:"geocode" bson:"geoCode" binding:"required"`
	Name        string   `json:"name" bson:"name" binding:"required"`
	StarRating  int      `json:"starRating" bson:"starRating" binding:"required"`
	Traits      []ITrait `json:"traits" bson:"traits" binding:"required"`
	Description string   `json:"description" bson:"description"`
}
