import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  //   Paper,
  // Avatar,
  // Button,
  // Typography,
  // Link,
} from "@mui/material";

function AppForm() {
  const initialVal = {
    id: 0,
    fullname: "",
    email: "",
    gender: "",
    phoneNo: "",
    // address: {
    //   city: "",
    //   subCity: "",
    //   phone: "",
    //   placeName: "",
    //   streetName: "",
    // },
    address: "",
    education: "",
    image: "",
  };

  const [values, setValues] = useState(initialVal);
  const textStyle = { margin: "10px", width: "80%" };

  const handleInput = (e) => {
    const [name, value] = e.target;
    // setValues({ ...values, [name]: value });
    console.log(e.target.value);
  };

  return (
    <form>
      <Grid container>
        <Grid item x6={6}>
          {/* <TextField
             variant="outlined"
            lable="Full Name"
            placeholder="Full Name"
            value={values.fullname}
            style={textStyle}
            required /> */}

          <TextField
            variant="outlined"
            label="Full Name"
            name="fullName"
            placeholder="Full Name"
            value={values.fullname}
            style={textStyle}
            onChange={handleInput}
            required
          />
          <TextField
            variant="outlined"
            label="Email"
            name="email"
            placeholder="Email"
            style={textStyle}
            value={values.email}
            required
          />
        </Grid>
        <Grid item x6={6}></Grid>
      </Grid>
    </form>
  );
}

export default AppForm;
