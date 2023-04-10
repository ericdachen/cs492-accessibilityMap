import json
import random
import uuid
from faker import Faker
import requests
import time

fake = Faker()

url = "http://localhost:8080/pins"  # Replace with your desired URL

class Trait:
    WheelchairAccessible = "wheelchairAccessible"
    MultilingualStaff = "multilingualStaff"
    SignLanguage = "signLanguage"
    BrailleMenu = "brailleMenu"
    ServicePetFriendly = "servicePetFriendly"
    CuttingServices = "cuttingServices"

    @classmethod
    def get_random_unique_traits(cls, count):
        return random.sample([
            cls.WheelchairAccessible,
            cls.MultilingualStaff,
            cls.SignLanguage,
            cls.BrailleMenu,
            cls.ServicePetFriendly,
            cls.CuttingServices
        ], count)

# Limits the geocode to the Waterloo region
def create_random_geocode():
    return {
        "latitude": random.uniform(43.44, 43.51),
        "longitude": random.uniform(-80.58, -80.50)
    }

def create_random_pin():
    return {
        "geocode": create_random_geocode(),
        "name": fake.company(),
        "starRating": random.randint(1, 5),
        "traits": Trait.get_random_unique_traits(random.randint(1, 6)),
        "description": fake.text()
    }

def create_add_pin_request(pin):
    return {
        "pin": pin
    }

def send_add_pin_request(request_data, url):
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, data=json.dumps(request_data), headers=headers)
    return response

if __name__ == "__main__":
    for _ in range(100):
        pin = create_random_pin()
        request_data = create_add_pin_request(pin)
        response = send_add_pin_request(request_data, url)
        print(f"Sent pin: {pin}, response status: {response.status_code}")
