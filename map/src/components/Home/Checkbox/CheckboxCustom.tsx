import React, { useState } from "react";
import background from "./background.png";
import {
  Grid,
  Typography,
  Stack,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

export default function CheckboxCustom(props: any) {
  return (
    <FormControlLabel
      control={<Checkbox defaultChecked />}
      label={props.label}
    />
  );
}
