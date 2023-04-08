import React, { useState } from "react";
import background from "./background.png";
import {
  Grid,
  Typography,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";

export default function CheckboxCustom5(props: any) {
  if (props.size === "small") {
    return (
      <FormControlLabel
        disabled={true}
        control={<Checkbox defaultChecked />}
        label={<Typography variant="caption">{props.label}</Typography>}
      />
    );
  } else {
    return (
      <FormControlLabel
      control={
        <Checkbox
          sx={{ "& .MuiSvgIcon-root": { fontSize: "2rem", color: "purple" } }}
        />
      }
      label={<Typography variant="body2">{props.label}</Typography>}
      />
    );
  }
}
