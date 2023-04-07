import React, { useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Box } from "@mui/material";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 43.4643,
  lng: -80.5204,
};

const mcDonalds = {
  lat: 43.4830685733885,
  lng: -80.52551182282787,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
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
    <Box height="85vh" width="55vw" marginLeft="2vw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 7,
          }}
          position={mcDonalds}
        />
      </GoogleMap>
    </Box>
  );
}

export default Map;
