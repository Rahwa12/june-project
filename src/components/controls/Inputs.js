import React from "react";
import { TextField } from "@mui/material";

function Inputs(props) {
  const { name, label, value, type, onChange, placeholder } = props;
  const textStyle = { margin: "10px", width: "80%" };

  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      style={textStyle}
      onChange={onChange}
      required
    />
  );
}

export default Inputs;
