import React, { useRef, useState } from "react";
import {
  GoogleMap,
  MarkerF,
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

const kk = {
  lat: 43.47571816495286,
  lng: -80.5180526156766,
};

const kkString =
  '<div id="content">' +
  '<div id="siteNotice">' +
  "</div>" +
  '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
  '<div id="bodyContent">' +
  "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
  "sandstone rock formation in the southern part of the " +
  "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
  "south west of the nearest large town, Alice Springs; 450&#160;km " +
  "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
  "features of the Uluru - Kata Tjuta National Park. Uluru is " +
  "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
  "Aboriginal people of the area. It has many springs, waterholes, " +
  "rock caves and ancient paintings. Uluru is listed as a World " +
  "Heritage Site.</p>" +
  '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
  "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
  "(last visited June 22, 2009).</p>" +
  "</div>" +
  "</div>";

function Map(props: any) {
  const icon = "restaurant.png";
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
        options={{
          mapId: "4f514f1f3a43490",
        }}
      >
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={kk}
        />
      </GoogleMap>
    </Box>
  );
}

export default Map;
