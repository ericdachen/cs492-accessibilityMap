import React, { useState } from "react";
import background from "./background.png";
import {
  Grid,
  Typography,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import CheckboxCustom from "./Checkbox/CheckboxCustom";

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
        <Grid item xs={5}>
          <Stack spacing={4}>
            <Typography variant="h2" component="h2" align="left">
              Visit places that care about inclusion!
            </Typography>
            <Typography variant="h5" align="left">
              Preferences
            </Typography>
            <Stack direction="row" spacing={2}>
              <Stack>
                <CheckboxCustom label="Wheelchair Accessible" />
                <CheckboxCustom label="Sign Language" />
              </Stack>
              <Stack>
                <CheckboxCustom label="Multilingual Staff" />
              </Stack>
            </Stack>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              fullWidth
            />
          </Stack>
        </Grid>
        <Grid item xs={7}></Grid>
      </Grid>
    </div>
  );
}
