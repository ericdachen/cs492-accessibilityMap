import React, { useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBmW9pieLwbY-Xm1BNuJm2NOpnoeHdJSfQ",
  });

  //Save map in ref if to access the map later
  const mapRef = useRef<any | null>(null);

  const onLoad = (map: any): void => {
    mapRef.current = map;
  };

  const onUnmount = (): void => {
    mapRef.current = null;
  };

  const [map, setMap] = useState(null);

  //   const onLoad = React.useCallback(function callback(map: any) {
  //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //     const bounds = new window.google.maps.LatLngBounds(center);
  //     map.fitBounds(bounds);

  //     setMap(map);
  //   }, []);

  //   const onUnmount = React.useCallback(function callback(map: any) {
  //     setMap(null);
  //   }, []);

  if (!isLoaded) return <div>Loading ...</div>;
  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </>
  );
}

export default Map;
