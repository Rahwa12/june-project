import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { Grid, Paper, Avatar, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import AppBar from "@mui/material/AppBar";
// import Box from '@mui/material/Box';
import Toolbar from "@mui/material/Toolbar";
// import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Headers = () => {
  const { Link } = require("react-router-dom");
  const [loggedIn, setLoggedIn] = useState(false);

  // const navigate = useNavigate();

  // const paperStyle = {
  //   // height: "65vh",
  //   padding: "10px 30px",
  //   // width: "280px",
  //   margin: "5px 10px",
  //   borderRadius: "20px",
  //   // backgroundColor: "whitesmoke",
  // };
  // const avatarStyle = {
  //   backgroundColor: "#369e7d",
  //   float: "right",
  //   // marginRight: "10px",
  // };

  return (
    <AppBar position="static" style={{ backgroundColor: "gray" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
          <h2>Application Management System</h2>
        </Typography>

        {/* <Link
          className="hom"
          to="/"
          style={{ padding: "10px", fontSize: "20px", color: "white" }}
        >
          Home
        </Link> */}
        <Link to="/login" style={{ padding: "10px" }}>
          <button>LogIn</button>
        </Link>
        <Link
          to="/apply"
          style={{ padding: "0px 10px", float: "right", marginRight: "20px" }}
        >
          <button>Apply</button>
        </Link>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Headers;
