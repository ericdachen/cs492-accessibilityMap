import React, { useState } from "react";
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
  Box,
  Chip,
} from "@mui/material";
import RestaurantCard from "./Restaurant/RestaurantCard";
import SearchAppBar from "./NavBar/NavBar";
import Map from "../Map/Map";
import AccessibleIcon from "@mui/icons-material/Accessible";
import { useQuery } from "react-query";
import { IPin } from "../../types/pin";
import TranslateIcon from "@mui/icons-material/Translate";
import PetsIcon from "@mui/icons-material/Pets";
import {
  GoogleMap,
  MarkerF,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Translate } from "@mui/icons-material";

interface IProps {}

export default function Explore() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const {
    data: pinsData,
    isLoading,
    isError,
  } = useQuery<IPin[]>("pins", () => {
    // You can provide a default fetch function here, but since the pins data
    // is already in the cache, it won't be used unless the cache is empty.
    throw new Error("Pins data not found in cache");
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={3}>
        <SearchAppBar />
        <Grid
          container
          spacing={0}
          sx={{
            px: 5,
          }}
          style={{
            height: "100vh",
            width: "100vw",
            alignItems: "center",
          }}
        >
          <Grid item xs={5} spacing={1}>
            <Stack spacing={1}>
              <Typography align="left" variant="h3" fontWeight={800}>
                {" "}
                Restaurants Near Me
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip
                  style={{
                    width: "10vw",
                    backgroundColor: "#FFEAD1",
                  }}
                  icon={<AccessibleIcon />}
                  label="Wheelchair Accessible"
                />
                <Chip
                  style={{
                    width: "10vw",
                    backgroundColor: "#FFD0DB",
                  }}
                  icon={<TranslateIcon />}
                  label="Sign Language Available"
                />
                <Chip
                  style={{
                    width: "10vw",
                    backgroundColor: "#D8E1FF",
                  }}
                  icon={<PetsIcon />}
                  label="Service Pet Friendly"
                />
              </Stack>

              <Box maxHeight="70vh" sx={{ overflow: "auto" }}>
                <Stack spacing={4} padding={1}>
                  <RestaurantCard
                    rate="4.7"
                    name="Korner Kitchen"
                    photo="kk.jpeg"
                    cuisine="English Cuisine"
                  />
                  <RestaurantCard
                    rate="4.1"
                    name="Lazeez Shawarma"
                    photo="lazeez.jpeg"
                    cuisine="Meditteranean Cuisine"
                  />
                  <RestaurantCard
                    rate="4.2"
                    name="Nuri Village"
                    photo="nuri.jpg"
                    cuisine="Korean Food"
                  />
                  <RestaurantCard photo="lazeez.jpeg" />
                  <RestaurantCard photo="lazeez.jpeg" />
                  <RestaurantCard photo="lazeez.jpeg" />
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Map pinsData={""} />
          </Grid>
        </Grid>
      </Stack>
    </ThemeProvider>
  );
}
