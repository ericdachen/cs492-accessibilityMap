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
import { useNavigate } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import { IPinSearchCriteria, ITrait } from "../../types/pin";
import { getPinsByCriteria,IGetPinRequest } from "../../services/pins";
import { useMutation, useQueryClient } from "react-query";

export default function Home() {
  const [wheelchair, setWheelchair] = useState(false);
  const [multilingual, setMultilingual] = useState(false);
  const [sign, setSign] = useState(false);
  const [braille, setBraille] = useState(false);
  const [pet, setPet] = useState(false);
  const [foodcut, setFoodcut] = useState(false);
  const [data, setData] = useState([false, false, false, false, false, false]);

  const [name, setName] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient()
  const mutation = useMutation(getPinsByCriteria, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("pins");
      queryClient.setQueryData("pins", data);
      navigate("/explore")
    },
  });

  const handleSubmitButton = () => {
    const traits:ITrait[] = []

    if (wheelchair){
      traits.push(ITrait.WheelchairAccessible)
    }
    if (multilingual){
      traits.push(ITrait.MultilingualStaff)
    }
    if (sign){
      traits.push(ITrait.SignLanguage)
    }
    if (braille){
      traits.push(ITrait.BrailleMenu)
    }
    if (pet){
      traits.push(ITrait.ServicePetFriendly)
    }
    if (foodcut){
      traits.push(ITrait.CuttingServices)
    }

    const pinSearchCriteria: IPinSearchCriteria = {
      name: name,
      traits: traits
    }
    console.log(pinSearchCriteria)

    const getPinRequest:IGetPinRequest={
      searchCriteria: pinSearchCriteria
    }

    mutation.mutate(getPinRequest);


  }


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
                onChange = {(e) => { setName(e.target.value)  }}
              />
              
                <IconButton
                  type="submit"
                  aria-label="search"
                  onClick={() => {
                    handleSubmitButton()
                  }}
                  sx={{
                    paddingBottom: "2vh",
                  }}
                >
                  <SearchIcon fontSize="large" />
                </IconButton>
             
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </div>
  );
}
