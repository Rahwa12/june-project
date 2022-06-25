import React, { useState, useRef, useEffect } from "react";
import Inputs from "./controls/Inputs";
import Radios from "./controls/Radios";
import Selects from "./controls/Selects";
import { Button, Grid } from "@mui/material";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function AppForm() {
  const navigate = useNavigate();
  const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
  ];
  const initialVal = {
    // key: 0,
    firstName: "",
    lastName: "",
    email: "",
    gender: "male",
    phoneNo: "",
    // address: {
    //   city: "",
    //   subCity: "",
    //   phone: "",
    //   placeName: "",
    //   streetName: "",
    // },
    address: "",
    educationLevel: "",
    department: "",
    // image: "",
  };
  const [values, setValues] = useState(initialVal);

  const depts = () => [
    { id: "swEng", title: "Software Eng" },
    { id: "elecEng", title: "Electrical Eng" },
    { id: "electroEng", title: "Electro Mech Eng" },
    { id: "arch", title: "Archtecture" },
  ];

  const levels = () => [
    { id: "bsc", title: "BSc" },
    { id: "ba", title: "BA" },
    { id: "msc", title: "MSc" },
    { id: "mba", title: "MBA" },
    { id: "diploma", title: "Diploma" },
    { id: "phd", title: "PHD" },
  ];
  const btnStyle = {
    display: "flex",
    // justifyContent: "center",
    margin: "15px auto",
    padding: "15px",
    backgroundColor: "gray",
  };
  const btnrStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "15px ",
    padding: "13px",
    border: "solid 2px",
    color: "gray",
    backgroundColor: "white",
  };

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const [address, setAddress] = useState("");
  // const [gender, setGender] = useState("male");
  // const [department, setDepartment] = useState("");
  // const [educationLevel, setEducationLevel] = useState("");
  const [key, setKey] = useState("");
  const [error, setError] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);
  const [returnSecureToken, setReturnSecureToken] = useState(true);

  // const handleInput = (e, index) => {
  //   const { name, value } = e.target;
  //   const list = [...values];
  //   list[index][name] = value;
  //   setValues(list);
  //   console.log(value);
  // };

  const handleInput = (field, e) => {
    let new_val = { ...values };
    new_val[field] = e.target.value;
    setValues(new_val);
    console.log(new_val[field]);
  };

  // const handleInputFName = (e) => {
  //   setFirstName(e.target.value);
  //   // console.log(firstName);
  // };
  // const handleInputLName = (e) => {
  //   setLastName(e.target.value);
  //   // console.log(lastName);
  // };

  // const handleInputEmail = (e) => {
  //   setEmail(e.target.value);
  //   // console.log(email);
  // };
  // const handleInputPhone = (e) => {
  //   setPhoneNo(e.target.value);
  //   // console.log(phoneNo);
  // };
  // const handleInputAddress = (e) => {
  //   setAddress(e.target.value);
  //   // console.log(address);
  // };

  // const handleInputGender = (e) => {
  //   setGender(e.target.value);
  //   // console.log(gender);
  // };

  // const handleInputDept = (e) => {
  //   setDepartment(e.target.value);
  //   // console.log(department);
  // };

  // const handleInputEduLevel = (e) => {
  //   setEducationLevel(e.target.value);
  //   // console.log(educationLevel);
  // };
  // const handleReset = (e) => {
  //   console.log("Reset");
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  //   setPhoneNo("");
  //   setGender("male");
  //   setAddress("");
  //   setEducationLevel("");
  //   setDepartment("");
  // };

  const handleReset = (e) => {
    console.log("Reset");
    setValues(initialVal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // navigate("/");
    setSendingRequest(true);

    setError(false);
    try {
      const appInfo = values;

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
      navigate("/");
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
        <Grid container item xs={6}>
          {/* <TextField
             variant="outlined"
            lable="Full Name"
            placeholder="Full Name"
            value={values.fullname}
            style={textStyle}
            required /> */}

          <Grid item xs={5.35}>
            <Inputs
              label="First Name"
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={(event) => {
                handleInput("firstName", event);
              }}
              required
            />
          </Grid>
          <Grid item xs={5.35}>
            <Inputs
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={(event) => {
                handleInput("lastName", event);
              }}
              required
            />
          </Grid>
          <Inputs
            label="Email"
            name="email"
            placeholder="Email"
            type="email"
            value={values.email}
            onChange={(event) => {
              handleInput("email", event);
            }}
            required
          />
          <Inputs
            label="Phone No"
            name="phoneNo"
            placeholder="Phone No"
            type="number"
            value={values.phoneNo}
            onChange={(event) => {
              handleInput("phoneNo", event);
            }}
            required
          />
          <Inputs
            label="Address"
            name="address"
            placeholder="Address"
            value={values.address}
            onChange={(event) => {
              handleInput("address", event);
            }}
            required
          />
        </Grid>
        <Grid container item xs={6}>
          <Radios
            label="Gender"
            name="gender"
            value={values.gender}
            onChange={(event) => {
              handleInput("gender", event);
            }}
            items={genderItems}
          />
          <Selects
            name="department"
            value={values.department}
            label="Department"
            onChange={(event) => {
              handleInput("department", event);
            }}
            options={depts()}
          />
          <Selects
            name="educationLevel"
            value={values.educationLevel}
            label="Education Level"
            onChange={(event) => {
              handleInput("educationLevel", event);
            }}
            options={levels()}
          />
          <Grid item xs={5.35}>
            <Button variant="contained" type="submit" style={btnStyle}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={5.35}>
            <Button variant="contained" onClick={handleReset} style={btnrStyle}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}

export default AppForm;
