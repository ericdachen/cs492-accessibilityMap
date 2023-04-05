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
} from "@mui/material";
import RestaurantCard from "./Restaurant/RestaurantCard";

export default function Explore() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={0}
        sx={{
          p: 5,
        }}
        style={{
          height: "100vh",
          width: "100vw",
          alignItems: "center",
        }}
      >
        <Grid item xs={5}>
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
        </Grid>
        <Grid item xs={7}></Grid>
      </Grid>
    </ThemeProvider>
  );
}
