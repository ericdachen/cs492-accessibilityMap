import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#FFFFFF",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    marginLeft: "5%",
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "black",
  borderRadius: "5px",
  color: "white",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#3E4958",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "100%",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [value, setValue] = useState("");

  function clickSearch() {
    console.log(value);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" color="default">
        <Toolbar>
          <Stack>
            <Stack direction="row">
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                onChange={(e) => setValue(e.target.value)}
                sx={{
                  width: "35vw",
                }}
              />
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
                onClick={clickSearch}
              >
                <SearchIcon fontSize="large" />
              </Box>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
