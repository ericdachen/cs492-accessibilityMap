# Accessibility Map API

## Schemas

### ILocation
```json
{
  "latitude": number,
  "longitude": number
}
```

### ITrait
```json
enum Trait {
  "wheelchairAccessible",
  "multilingualStaff",
  "signLanguage",
  "brailleMenu",
  "servicePetFriendly",
  "cuttingServices"
}
```

### IPin

```json
{
  "id": string,
  "geocode": ILocation,
  "name": string,
  "description": string,
  "starRating": number,
  "traits": ITrait[],
  
}
```

## Base URL
/

## Endpoints

### GetPinById

- **URL**: `/pins/:id`
- **Method**: `GET`
- **URL Parameters**: `id=[string]`

#### Sample Request

```json
GET /pins/123
```

#### Sample Response
```json
{
  "pin": {
    // IPin object properties
  }
}
```

### GetPinByCriteria
- **URL**: `/pins`
- **Method**: `GET`
- **Data Parameters**: `{ "pin": { // IPin object properties } }`

#### Sample Request
```json
GET /pins
{
  "searchCriteria": {
    // IPin object properties (do not pass id)
  }
}
```

#### Sample Response
```json
{
  "pins": [
    // IPin object properties
  ]
}
```


### AddPin
- **URL**: `/pins`
- **Method**: `POST`
- **Data Parameters**: `{ "pin": { // IPin object properties } }`

#### Sample Request
```json
POST /pins
{
  "pin": {
    // IPin object properties
  }
}
```

#### Sample Response
```json
{
  "pin": {
    // IPin object properties
  }
}
```

### UpdatePin
- **URL**: `/pins/:id`
- **Method**: `PUT`
- **URL Parameters**: `id=[string]`
- **Data Parameters**: `{ "pin": { // IPin object properties } }`
- **Notes**: Updates the pin with the given id

#### Sample Request
```json
PUT /pins/123
{
  "pin": {
    // IPin object properties  (do not pass id)
  }
}
```

#### Sample Response
```json
{
  "pin": {
    // IPin object properties
  }
}
```

### DeletePin
- **URL**: `/pins/:id`
- **Method**: `DELETE`
- **URL Parameters**: `id=[string]`
- **Notes**: Deletes the pin with the given id

#### Sample Request
```json
DELETE /pins/123
```

#### Sample Response
```json
{}
```

### GetPinByLocation
- **URL**: `/pins/location`
- **Method**: `GET`
- Data Parameters: `{ "location": { // ILocation object properties }, "radius": number }`
- **Notes**: Returns all pins within the given radius of the given location
- **Notes**: The radius is in meters
- **Notes**: The location is the center of the radius

#### Sample Request
```json
GET /pins/location
{
  "location": {
    // ILocation object properties
  },
  "radius": 100
}
```

#### Sample Response
```json
{
  "pins": [
    // IPin object properties
  ]
}
```

## How to run locally

docker run --name accessibilitymap-mongo-4.0 -p 27017:27017 -v ~/Volumes/accessibilitymap-mongo-4.0:/data/db -d mongo:4.0
