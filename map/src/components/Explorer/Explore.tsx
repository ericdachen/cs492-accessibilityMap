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
export default function Explore() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
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

            <Box maxHeight="80vh" sx={{ overflow: "auto" }}>
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
    </ThemeProvider>
  );
}
