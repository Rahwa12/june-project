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
// import FormControlLabel from "@mui/material/FormControlLabel";

// import Checkbox from "@mui/material/Checkbox";

// useEffect (() => {

// },[])

function Apply() {
  const gridStyle = { margin: "10px auto", backgroundColor: "whitesmoke" };

  const paperStyle = {
    // height: "65vh",
    // width: "280px",
    width: "90%",
    padding: "30px",
    margin: "30px auto",
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
