import React, { useState } from "react";
import Inputs from "./controls/Inputs";
import Radios from "./controls/Radios";
import Selects from "./controls/Selects";
import {
  Button,
  // FormControl,
  // FormControlLabel,
  // FormLabel,
  Grid,
  // Radio,
  // RadioGroup,
  //   Paper,

  // Avatar,
  // Button,
  // Typography,
  // Link,
} from "@mui/material";

import axios from "axios";

function AppForm() {
  const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
  ];
  //   const initialVal = {
  //     id: 0,
  //     firstName: "",
  //     lastName: "",
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
  //     educationLevel: "",
  //     image: "",
  //   };

  // const [values, setValues] = useState(initialVal);
  const depts = () => [
    { id: "1", title: "Abcd" },
    { id: "2", title: "Efgh" },
    { id: "3", title: "Ijkl" },
    { id: "4", title: "Mnop" },
  ];
  const levels = () => [
    { id: "1", title: "BSc" },
    { id: "2", title: "BA" },
    { id: "3", title: "MSc" },
    { id: "4", title: "MBA" },
    { id: "5", title: "Diploma" },
    { id: "6", title: "PHD" },
  ];
  const btnStyle = {
    margin: "10px",
    padding: "10px 40px",
  };
  const btnrStyle = {
    margin: "10px",
    padding: "10px 40px",
    backgroundColor: "gray",
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("male");
  const [department, setDepartment] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [error, setError] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);
  const [returnSecureToken, useReturnSecureToken] = useState(true);

  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   console.log(name);
  //   setValues({ ...values, [name]: value });
  // };

  const handleInputFName = (e) => {
    setFirstName(e.target.value);
    // console.log(firstName);
  };
  const handleInputLName = (e) => {
    setLastName(e.target.value);
    // console.log(lastName);
  };

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };
  const handleInputPhone = (e) => {
    setPhoneNo(e.target.value);
    // console.log(phoneNo);
  };
  const handleInputAddress = (e) => {
    setAddress(e.target.value);
    // console.log(address);
  };

  const handleInputGender = (e) => {
    setGender(e.target.value);
    // console.log(gender);
  };

  const handleInputDept = (e) => {
    setDepartment(e.target.value);
    // console.log(department);
  };

  const handleInputEduLevel = (e) => {
    setEducationLevel(e.target.value);
    // console.log(educationLevel);
  };
  const handleReset = (e) => {
    console.log("Reset");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNo("");
    setGender("male");
    setAddress("");
    setEducationLevel("");
    setDepartment("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // navigate("/");
    setSendingRequest(true);
    setError(false);
    try {
      const appInfo = {
        firstName,
        lastName,
        email,
        phoneNo,
        address,
        gender,
        department,
        educationLevel,
        returnSecureToken,
      };

      const response = await axios
        .post(
          // "http://192.168.1.18:5000/api/employee/registerEmployee",
          "https://hr-proj-1234-default-rtdb.firebaseio.com/applicant.json",
          appInfo
        )

        .catch((e) => {
          console.log("err", e);
        });

      console.log(response.data.name);
      alert("Your Application is submitted successfully !");
      // navigate("/registered");
    } catch {
      // errroneous response
      setError(true);
    } finally {
      setSendingRequest(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container style={{ padding: "20px", margin: "20px " }}>
        <Grid item xs={6}>
          {/* <TextField
             variant="outlined"
            lable="Full Name"
            placeholder="Full Name"
            value={values.fullname}
            style={textStyle}
            required /> */}

          <Grid item xs={6}>
            <Inputs
              label="First Name"
              name="firsstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleInputFName}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Inputs
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleInputLName}
              required
            />
          </Grid>
          <Inputs
            label="Email"
            name="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={handleInputEmail}
            required
          />
          <Inputs
            label="Phone No"
            name="phoneNo"
            placeholder="Phone No"
            type="number"
            value={phoneNo}
            onChange={handleInputPhone}
            required
          />
          <Inputs
            label="Address"
            name="address"
            placeholder="Address"
            value={address}
            onChange={handleInputAddress}
            required
          />
        </Grid>
        <Grid item xs={6}>
          <Radios
            label="Gender"
            name="gender"
            value={gender}
            onChange={handleInputGender}
            items={genderItems}
          />
          {/* <div> */}
          <Selects
            name="department"
            value={department}
            label="Department"
            onChange={handleInputDept}
            options={depts()}
          />
          {/* </div> */}
          <Selects
            name="educationLevel"
            value={educationLevel}
            label="Education Level"
            onChange={handleInputEduLevel}
            options={levels()}
          />
          <div>
            <Button variant="contained" type="submit" style={btnStyle}>
              Submit
            </Button>
            <Button variant="contained" onClick={handleReset} style={btnrStyle}>
              Reset
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}

export default AppForm;
