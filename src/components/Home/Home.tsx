import React, { useState, useEffect } from "react";
import background from "./map.png";
import {
  Grid,
  Typography,
  Stack,
  FormGroup,
  FormControlLabel,
  IconButton,
  Checkbox,
  Box,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  const [wheelchair, setWheelchair] = useState(false);
  const [multilingual, setMultilingual] = useState(false);
  const [sign, setSign] = useState(false);
  const [braille, setBraille] = useState(false);
  const [pet, setPet] = useState(false);
  const [foodcut, setFoodcut] = useState(false);
  const [data, setData] = useState([false, false, false, false, false, false]);
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
            <Typography
              variant="h2"
              component="h2"
              align="left"
              fontWeight="800"
            >
              Visit restaurants that care about inclusion!
            </Typography>
            <Typography variant="h5" align="left" fontWeight="500">
              Preferences
            </Typography>
            <Stack direction="row" spacing={4}>
              <Stack>
                <Box
                  sx={{
                    backgroundColor: "#FFEAD1",
                    borderRadius: "100px",
                    px: "1.5vw",
                    my: "1vh",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#FF740F",
                          "&.Mui-checked": {
                            color: "#FF740F",
                          },
                        }}
                        checked={wheelchair}
                        onChange={() => {
                          setWheelchair(!wheelchair);
                          setData([
                            !data[0],
                            data[1],
                            data[2],
                            data[3],
                            data[4],
                            data[5],
                          ]);
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        Wheelchair Accessible
                      </Typography>
                    }
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#FFD0DB",
                    borderRadius: "100px",
                    px: "1.5vw",
                    my: "1vh",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#F13B3B",
                          "&.Mui-checked": {
                            color: "#F13B3B",
                          },
                        }}
                        checked={sign}
                        onChange={() => {
                          setSign(!sign);
                          setData([
                            data[0],
                            data[1],
                            !data[2],
                            data[3],
                            data[4],
                            data[5],
                          ]);
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2">Sign Language</Typography>
                    }
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#E1D6FF",
                    borderRadius: "100px",
                    px: "1.5vw",
                    my: "1vh",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#5011FB",
                          "&.Mui-checked": {
                            color: "#5011FB",
                          },
                        }}
                        checked={pet}
                        onChange={() => {
                          setPet(!pet);
                          setData([
                            data[0],
                            data[1],
                            data[2],
                            data[3],
                            !data[4],
                            data[5],
                          ]);
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        Service Pet Friendly
                      </Typography>
                    }
                  />
                </Box>
              </Stack>
              <Stack>
                <Box
                  sx={{
                    backgroundColor: "#D8E1FF",
                    borderRadius: "100px",
                    px: "1.5vw",
                    my: "1vh",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#3867FF",
                          "&.Mui-checked": {
                            color: "#3867FF",
                          },
                        }}
                        checked={multilingual}
                        onChange={() => {
                          setMultilingual(!multilingual);
                          setData([
                            data[0],
                            !data[1],
                            data[2],
                            data[3],
                            data[4],
                            data[5],
                          ]);
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        Multilingual Staff
                      </Typography>
                    }
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#EDF9D4",
                    borderRadius: "100px",
                    px: "1.5vw",
                    my: "1vh",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#91D10A",
                          "&.Mui-checked": {
                            color: "#91D10A",
                          },
                        }}
                        checked={foodcut}
                        onChange={() => {
                          setFoodcut(!foodcut);
                          setData([
                            data[0],
                            data[1],
                            data[2],
                            data[3],
                            data[4],
                            !data[5],
                          ]);
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        Food-cutting Services
                      </Typography>
                    }
                  />
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#FFFDC9",
                    borderRadius: "100px",
                    px: "1.5vw",
                    my: "1vh",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#FBF301",
                          "&.Mui-checked": {
                            color: "#FBF301",
                          },
                        }}
                        checked={braille}
                        onChange={() => {
                          setBraille(!braille);
                          setData([
                            data[0],
                            data[1],
                            data[2],
                            !data[3],
                            data[4],
                            data[5],
                          ]);
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        Braille Menus Printed
                      </Typography>
                    }
                  />
                </Box>
              </Stack>
            </Stack>
            <Stack direction="row">
              <TextField
                id="search-bar"
                label="Search"
                variant="outlined"
                fullWidth
                size="medium"
                sx={{
                  height: "6.5vh",
                }}
              />
              <Link
                to={{
                  pathname: "/explore",
                }}
                state={{
                  data: data,
                }}
              >
                <IconButton
                  type="submit"
                  aria-label="search"
                  onClick={() => {
                    console.log(wheelchair);
                  }}
                  sx={{
                    paddingBottom: "2vh",
                  }}
                >
                  <SearchIcon fontSize="large" />
                </IconButton>
              </Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}
