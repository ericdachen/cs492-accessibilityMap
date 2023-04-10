import React, { useState } from "react";
import { Typography, FormControlLabel, Checkbox, Box } from "@mui/material";

export default function CheckboxCustom(props: any) {
  const [checked, setChecked] = useState(false);
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
      <CheckboxCustom>
        <Box
          sx={{
            backgroundColor: props.colorNum,
            borderRadius: "100px",
            px: "1.5vw",
            my: "1vh",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: props.colorChecked,
                  "&.Mui-checked": {
                    color: props.colorChecked,
                  },
                }}
                checked={checked}
                onChange={() => {
                  setChecked(!checked);
                }}
              />
            }
            label={<Typography variant="body2">{props.label}</Typography>}
          />
        </Box>
      </CheckboxCustom>
    );
  }
}
