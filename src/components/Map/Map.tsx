import React, { useRef, useState } from "react";
import {
  GoogleMap,
  MarkerF,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Box } from "@mui/material";
import { Info } from "@mui/icons-material";
import AccessibleIcon from "@mui/icons-material/Accessible";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import {
  Grid,
  Typography,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Paper,
  Chip,
} from "@mui/material";
import { useQuery } from "react-query";
import TranslateIcon from "@mui/icons-material/Translate";
import PetsIcon from "@mui/icons-material/Pets";
import StarIcon from "@mui/icons-material/Star";

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

function Map(props: any) {
  const [showInfo, setShowInfo] = useState(false);
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

  // let markerItems = props.pinsData.map((num: any) => (
  //   <MarkerF
  //     key={num}
  //     animation={google.maps.Animation.DROP}
  //     icon={{
  //       url: "restaurantred.png",
  //       scale: 2,
  //     }}
  //     position={{
  //       lat: num.geocode.latitude,
  //       lng: num.geocode.longitude,
  //     }}
  //   />
  // ));

  function openInfo() {
    setShowInfo(true);
  }

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
        {showInfo ? (
          <InfoWindow
            position={kk}
            onCloseClick={() => {
              setShowInfo(false);
            }}
          >
            <div>
              {" "}
              <img
                width="100%"
                height="350px"
                object-fit="cover"
                src="kk.jpeg"
              ></img>
              <h1>Korner Kitchen</h1>
              <Typography variant="h5">
                Breakfast plates, hearty sandwiches & other homestyle American
                fare in straightforward surrounds.
              </Typography>
              <br></br>
              <Stack direction="row" spacing={1}>
                <Chip
                  style={{
                    width: "12vw",
                    backgroundColor: "#FFEAD1",
                  }}
                  icon={<AccessibleIcon />}
                  label="Wheelchair Accessible"
                />
                <Chip
                  style={{
                    width: "12vw",
                    backgroundColor: "#FFD0DB",
                  }}
                  icon={<TranslateIcon />}
                  label="Sign Language Available"
                />
                <Chip
                  style={{
                    width: "12vw",
                    backgroundColor: "#D8E1FF",
                  }}
                  icon={<PetsIcon />}
                  label="Service Pet Friendly"
                />
              </Stack>
            </div>
          </InfoWindow>
        ) : (
          <></>
        )}

        {/* Test data not used in the actual map, markerItems are the pins that show */}
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.49181393358699,
            lng: -80.54243904772491,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.47669011158021,
            lng: -80.5634189657017,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.50845108452755,
            lng: -80.57951008927405,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.45194953796594,
            lng: -80.57129626536603,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.474348742772996,
            lng: -80.51988331818318,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.446000909590744,
            lng: -80.55293185290992,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.50571419400715,
            lng: -80.50875574594528,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.50316356315119,
            lng: -80.56599985562708,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.48245350159442,
            lng: -80.51714147944874,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.49911754876606,
            lng: -80.50522605319398,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.441468152972575,
            lng: -80.56028141691945,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.48064028370633,
            lng: -80.57407486200651,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.50330533418859,
            lng: -80.54594602498314,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.46436878369077,
            lng: -80.55009462854122,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.47409187012369,
            lng: -80.5274081209842,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.477324975997455,
            lng: -80.5105739800081,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.50646282884091,
            lng: -80.5389952936644,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.45372240090766,
            lng: -80.52753791308255,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.4647027567022,
            lng: -80.52950253805295,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.44843670070352,
            lng: -80.51391328050468,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.47782033494377,
            lng: -80.5082415534325,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.46421782583901,
            lng: -80.56274690651958,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.50482769288193,
            lng: -80.50988953092346,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.48038936332013,
            lng: -80.50705089134995,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.46910526365377,
            lng: -80.51664000848177,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.469496486425896,
            lng: -80.56659517547195,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.441086796591286,
            lng: -80.55920513069172,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.503521906908006,
            lng: -80.55864194828483,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.49393084860265,
            lng: -80.55032046105677,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.45221288450962,
            lng: -80.50900086835887,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.50659490157813,
            lng: -80.5467378162601,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.504772087567474,
            lng: -80.53110513001262,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.47767419320727,
            lng: -80.50597339247751,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.47183398775156,
            lng: -80.55876577739653,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.506410277035314,
            lng: -80.57629097756683,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={{
            lat: 43.493452564927956,
            lng: -80.57026658109362,
          }}
        />
        <MarkerF
          animation={google.maps.Animation.DROP}
          icon={{
            url: "restaurantred.png",
            scale: 2,
          }}
          position={kk}
          onClick={openInfo}
        />
      </GoogleMap>
    </Box>
  );
}

export default Map;
