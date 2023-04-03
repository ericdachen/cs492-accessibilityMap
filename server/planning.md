# Endpoints

## Pins

Create

- /
- Body params

Delete

- /[:id]

Edit

- /[:id]

List nearby

- /
- Body
  - lng
  - lat
  - maxDistance
- Lists all pins that within a geofence that is centered at lng and lat, with radius maxDistance

Get just one

- /[:id]
