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
import PasswordEye from "@mui/icons-material/RemoveRedEyeRounded";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import PassEye from "@mui/icons-material/RemoveRedEyeOutlined";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();
  const [error, setError] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);
  const [returnSecureToken, setReturnSecureToken] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

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
  const showPassStyle = {
    position: "relative",
    top: "-60px",
    right: "-240px",
    cursor: "pointer",
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    console.log(loggedInUser);
    // if (loggedInUser !== undefined) {
    //   const foundUser = JSON.parse(loggedInUser);
    //   setUser(foundUser);
    // }
  }, []);

  const showPass = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // btnStyle = { margin: "15" };
    console.log("first");
    setSendingRequest(true);
    setError(false);
    try {
      // const user = { email, password, returnSecureToken };
      const user = { email, password };
      // send the username and password to the server
      const response = await axios(
        // "http://192.168.1.18:5000/api/user/login",
        // "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCORRIYrnTaGzlKLtV4rd7bYPrhRuvOOZA",
        // user

        {
          url: "http://192.168.1.7/Auth/login",
          data: user,
          method: "post",
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      );
      console.log("fkljfkls", response);
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
        <form autoComplete="off">
          <TextField
            label="Email"
            placeholder="Email"
            fullWidth
            style={textStyle}
            autoComplete="off"
            onChange={({ target }) => setEmail(target.value)}
            required
          />
          <TextField
            label="Password"
            placeholder="Enter Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            style={textStyle}
            autoComplete="off"
            onChange={({ target }) => setPassword(target.value)}
            required
          />
          <span onClick={showPass} className="showPa" style={showPassStyle}>
            {showPassword ? <PasswordEye /> : <VisibilityOffIcon />}
          </span>

          {/* <button onClick={showPass}>Show Password</button> */}

          {/* <FormControlLabel
            control={<Checkbox name="checked" color="primary" />}
            label="Remember me"
          /> */}
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
          {error && (
            <h4 style={{ color: "red", textAlign: "center" }}>
              Wrong email or password
            </h4>
          )}
        </form>
      </Paper>
    </Grid>
  );
};

export default LogIn;
