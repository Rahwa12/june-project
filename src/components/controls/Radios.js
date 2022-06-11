import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

function Radios(props) {
  const { name, label, value, onChange, items } = props;

  return (
    <FormControl style={{ margin: "10px" }}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row name={name} value={value} onChange={onChange}>
        {items.map((item) => (
          <FormControlLabel
            value={item.id}
            control={<Radio />}
            label={item.title}
          />
          // <FormControlLabel value="male" control={<Radio />} label="Male" />;
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default Radios;
