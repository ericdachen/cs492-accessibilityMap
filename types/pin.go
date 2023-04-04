package types

type IPin struct {
	Id      string   `json:"id" bson:"id,omitempty"`
	GeoCode IGeoCode `json:"geocode" bson:"geoCode" binding:"required"`
}

// IPin builder pattern code
type IPinBuilder struct {
	iPin *IPin
}

func NewIPinBuilder() *IPinBuilder {
	iPin := &IPin{}
	b := &IPinBuilder{iPin: iPin}
	return b
}

func (b *IPinBuilder) Id(id string) *IPinBuilder {
	b.iPin.Id = id
	return b
}

func (b *IPinBuilder) GeoCode(geoCode IGeoCode) *IPinBuilder {
	b.iPin.GeoCode = geoCode
	return b
}

func (b *IPinBuilder) Build() (*IPin, error) {
	return b.iPin, nil
}
