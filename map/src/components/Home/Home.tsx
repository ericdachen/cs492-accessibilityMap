import React, { useState, useEffect } from "react";
import background from "./map.png";
import {
  Grid,
  Typography,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  TextField,
} from "@mui/material";
import CheckboxCustom from "./Checkbox/CheckboxCustom";
import CheckboxCustom2 from "./Checkbox/CheckboxCustom2";
import CheckboxCustom3 from "./Checkbox/CheckboxCustom3";
import CheckboxCustom4 from "./Checkbox/CheckboxCustom4";
import CheckboxCustom5 from "./Checkbox/CheckboxCustom5";
import CheckboxCustom6 from "./Checkbox/CheckboxCustom6";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { Height } from "@mui/icons-material";

import '../../../../map/src/App.css'
import '../../../../map/src/index.css'

import '../../App.css'
import '../../index.css'

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
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
        <Grid item xs={6}>
          <Stack spacing={4}>
            <Typography variant="h2" component="h2" align="left">
              Visit restaurants that care about inclusion!
            </Typography>
            <Typography variant="h5" align="left">
              Preferences
            </Typography>
            <Stack direction="row" spacing={2}>
              <Stack>
                <CheckboxCustom label="Wheelchair Accessible"/>
                <CheckboxCustom2 label="Sign Language" />
                <CheckboxCustom3 label="Service Pet Friendly" />
                
              </Stack>
              <Stack>
                <CheckboxCustom4 label="Multilingual Staff" />
                <CheckboxCustom5 label="Braille Menus Printed" />
                <CheckboxCustom6 label="Food-Cutting Services" />
              </Stack>
            </Stack>
            <Stack direction="row">
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                fullWidth
              />
              <Link
                to="explore"
                style={{
                  height: "inherit",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#000000",
                    color: "#FFFFFF",
                    minHeight: "6.5vh",
                    px: "0.5vw",
                    aspectRatio: "1/1",
                    borderRadius: "0px 10px 10px 0px",
                    verticalAlign: "center",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <SearchIcon fontSize="large" />
                </Box>
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}
