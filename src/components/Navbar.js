import React, { useState } from "react";
import "./Navbar.css";
import { Grid, Paper, Avatar } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const { Link } = require("react-router-dom");

const paperStyle = {
  padding: "5px 30px",
  margin: "5px",
  borderRadius: "20px",
  // backgroundColor: "whitesmoke",
};
const avatarStyle = {
  backgroundColor: "rgb(25, 118, 210)",
  float: "right",
  marginTop: "10px",
};

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    // <Grid style={{ backgroundColor: "whitesmoke" }}>

    <Grid>
      <Paper elevation={3} style={paperStyle}>
        <Avatar style={avatarStyle}>
          <PeopleAltIcon />
        </Avatar>
        <h2>Application Management System</h2>
      </Paper>
      <Grid className="navbar">
        <Link
          className="hom"
          to="/"
          style={{ padding: "10px", fontSize: "20px" }}
        >
          Home
        </Link>

        <Link to="/login" style={{ padding: "10px" }}>
          <button>LogIn</button>
        </Link>
        <Link
          to="/apply"
          style={{ padding: "0px 10px", float: "right", marginRight: "20px" }}
        >
          <button>Apply</button>
        </Link>
      </Grid>
      //{" "}
    </Grid>
  );
};

export default Navbar;
