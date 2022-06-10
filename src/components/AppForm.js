import React, { useState } from "react";
import Inputs from "./controls/Inputs";
import Radios from "./controls/Radios";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  //   Paper,
  // Avatar,
  // Button,
  // Typography,
  // Link,
} from "@mui/material";

function AppForm() {
  const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
  ];
  //   const initialVal = {
  //     id: 0,
  //     firstName: "",
  //     email: "",
  //     gender: "",
  //     phoneNo: "",
  //     // address: {
  //     //   city: "",
  //     //   subCity: "",
  //     //   phone: "",
  //     //   placeName: "",
  //     //   streetName: "",
  //     // },
  //     address: "",
  //     education: "",
  //     image: "",
  //   };

  // const [values, setValues] = useState(initialVal);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");

  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name);
  //   setValues({ ...values, [name]: value });
  // };

  const handleInputF = (e) => {
    setFullName(e.target.value);
    console.log(fullName);
  };

  const handleInputE = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleInputG = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  return (
    <form>
      <Grid container style={{ padding: "20px" }}>
        <Grid item x6={6}>
          {/* <TextField
             variant="outlined"
            lable="Full Name"
            placeholder="Full Name"
            value={values.fullname}
            style={textStyle}
            required /> */}

          <Inputs
            label="Full Name"
            name="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={handleInputF}
            required
          />
          <Inputs
            label="Email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleInputE}
            required
          />
        </Grid>
        <Grid item x6={6}>
          <FormControl style={{ margin: "10px" }}>
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              // aria-labelledby="demo-radio-buttons-group-label"
              value={gender}
              onChange={handleInputG}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />

              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
}

export default AppForm;
