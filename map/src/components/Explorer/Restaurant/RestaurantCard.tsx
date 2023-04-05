import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import {
  Box,
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
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CheckboxCustom from "../../Home/Checkbox/CheckboxCustom";

export default function RestaurantCard() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3}>
        <Card sx={{ display: "flex" }}>
          <Stack direction="row">
            <CardMedia
              component="img"
              sx={{ width: "40%", objectFit: "cover" }}
              image="lazeez.jpeg"
              title="green iguana"
            />
            <CardContent>
              <Stack spacing={0.5}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  align="left"
                >
                  Lazeez Shawarma
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  ⭐️ 4.8
                </Typography>
                <Typography variant="body2" color="text.secondary" align="left">
                  Mediterranean Cuisine
                </Typography>
                <Stack spacing={0}>
                  <CheckboxCustom label="Wheelchair Accessible" size="small" />
                  <CheckboxCustom label="Sign Language" size="small" />
                  <CheckboxCustom label="Service Pet Friendly" size="small" />
                </Stack>
              </Stack>
            </CardContent>
          </Stack>
        </Card>
      </Paper>
    </ThemeProvider>
  );
}
