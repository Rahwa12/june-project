import React from "react";
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

const LogIn = () => {
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
  const handle = () => {
    btnStyle = { margin: "15" };
    console.log("first");
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
          label="Username"
          placeholder="Enter Username"
          fullWidth
          style={textStyle}
          required
        />
        <TextField
          label="Password"
          placeholder="Enter Password"
          type="password"
          fullWidth
          style={textStyle}
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
          onClick={handle}
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
