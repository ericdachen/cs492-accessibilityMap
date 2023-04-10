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
  Chip,
} from "@mui/material";
import AccessibleIcon from "@mui/icons-material/Accessible";
import { useQuery } from "react-query";
import TranslateIcon from "@mui/icons-material/Translate";
import PetsIcon from "@mui/icons-material/Pets";
import StarIcon from "@mui/icons-material/Star";
import CheckboxCustom from "../../Home/Checkbox/CheckboxCustom";

export default function RestaurantCard(props: any) {
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
              image={props.photo}
              title={props.name}
            />
            <CardContent>
              <Stack spacing={0}>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  align="left"
                  fontWeight={800}
                >
                  {props.name}
                </Typography>
                <Typography variant="h6" color="text.secondary" align="left">
                  ⭐️ {props.rate} - {props.cuisine}
                </Typography>
                <br></br>
                <Stack spacing={1}>
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
              </Stack>
            </CardContent>
          </Stack>
        </Card>
      </Paper>
    </ThemeProvider>
  );
}
