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

interface IProps {}

export default function Explore() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const { data: pinsData, isLoading, isError } = useQuery<IPin[]>("pins", () => {
    // You can provide a default fetch function here, but since the pins data
    // is already in the cache, it won't be used unless the cache is empty.
    throw new Error("Pins data not found in cache");
  });

  console.log(pinsData)
  
  

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
              <Typography align="left" variant="h3">
                {" "}
                Restaurants Near Me
              </Typography>
              <Stack direction="row" spacing={1}>
                <Chip
                  style={{
                    width: "10vw",
                  }}
                  icon={<AccessibleIcon />}
                  label="Wheelchair Accessible"
                />
                <Chip
                  style={{
                    width: "10vw",
                  }}
                  icon={<AccessibleIcon />}
                  label="Wheelchair Accessible"
                />
              </Stack>

              <Box maxHeight="70vh" sx={{ overflow: "auto" }}>
                <Stack spacing={4} padding={1}>
                  <RestaurantCard />
                  <RestaurantCard />
                  <RestaurantCard />
                  <RestaurantCard />
                  <RestaurantCard />
                  <RestaurantCard />
                </Stack>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={7}>
            <Map />
          </Grid>
        </Grid>
      </Stack>
    </ThemeProvider>
  );
}
