import requests
import json
import random

url = "http://localhost:8080/pins"

headers = {
  'Content-Type': 'application/json'
}

def generate_random_pin():
    return {
        "pin": {
            "geocode": {
                "latitude": random.uniform(-90, 90),
                "longitude": random.uniform(-180, 180)
            }
        }
    }

for _ in range(100):
    payload = json.dumps(generate_random_pin())
    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)
