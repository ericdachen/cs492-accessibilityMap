# Accessibility Map API

## Schemas

### ILocation
```json
{
  "latitude": number,
  "longitude": number
}
```

### IPin

```json
{
  "Id": string,
  "Location": ILocation,
}
```

## Base URL
/

## Endpoints

### GetPin

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