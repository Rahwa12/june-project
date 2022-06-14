import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);
  const [returnSecureToken, setReturnSecureToken] = useState(true);

  const paperStyle = {
    height: "65vh",
    padding: "30px",
    width: "280px",
    margin: "30px auto",
    borderRadius: "20px",
    // backgroundColor: "whitesmoke",
  };
  const avatarStyle = { backgroundColor: "#369e7d" };
  const textStyle = { marginBottom: "20px" };
  let btnStyle = { margin: "8px 0" };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);
    // if (loggedInUser !== undefined) {
    //   const foundUser = JSON.parse(loggedInUser);
    //   setUser(foundUser);
    // }
  }, []);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   btnStyle = { margin: "15" };
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    // btnStyle = { margin: "15" };
    console.log("first");
    setSendingRequest(true);
    setError(false);
    try {
      const user = { email, password, returnSecureToken };
      // send the username and password to the server
      const response = await axios.post(
        // "http://192.168.1.18:5000/api/user/login",
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCORRIYrnTaGzlKLtV4rd7bYPrhRuvOOZA",
        user
      );
      // console.log("token", response.data.token);
      // localStorage.setItem("user", response.data.token);

      navigate("/applicants");
    } catch {
      // errroneous response
      setError(true);
      console.log("Error caught");
    } finally {
      setSendingRequest(false);
    }
  };

  return (
    <Grid>
      <Paper elevation={5} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>LogIn</h2>
        </Grid>
        <TextField
          label="Email"
          placeholder="Email"
          fullWidth
          style={textStyle}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          style={textStyle}
          onChange={({ target }) => setPassword(target.value)}
          required
        />

        <FormControlLabel
          control={<Checkbox name="checked" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          disabled={sendingRequest}
          onClick={handleLogin}
          fullWidth
        >
          LogIn
        </Button>
        <Typography>
          <Link href="a">Forgot password ? </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LogIn;
