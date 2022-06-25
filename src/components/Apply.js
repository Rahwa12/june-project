import React from "react";
import AppForm from "./AppForm";
import {
  Grid,
  Paper,
  // Avatar,
  // TextField,
  // Button,
  // Typography,
  // Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/PeopleOutlineTwoTone";

function Apply() {
  const gridStyle = {
    margin: "10px auto",
    padding: "10px",
    backgroundColor: "whitesmoke",
  };

  const paperStyle = {
    width: "90%",
    padding: "30px",
    margin: "20px auto",
    borderRadius: "20px",
    // backgroundColor: "whitesmoke",
  };

  return (
    <Grid style={gridStyle}>
      <Paper elevation={5} style={paperStyle}>
        <LockOutlinedIcon /> Applicaton Form
        <AppForm />
      </Paper>
    </Grid>
  );
}

export default Apply;
