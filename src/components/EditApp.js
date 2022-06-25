import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Inputs from "./controls/Inputs";
import Radios from "./controls/Radios";
import Selects from "./controls/Selects";

import EditIcon from "@mui/icons-material/CreditScore";
// import EditIcon from "@mui/icons-material/Edit";

import { Button, Grid, Paper } from "@mui/material";
import axios from "axios";

function EditApp(e) {
  // console.log("EditApp", route.params);
  const navigate = useNavigate();

  const location = useLocation();

  const initialVal = {
    firstName: location.state.firstName,
    lastName: location.state.lastName,
    email: location.state.email,
    gender: location.state.gender,
    phoneNo: location.state.phoneNo,
    // address: {
    //   city: "",
    //   subCity: "",
    //   phone: "",
    //   placeName: "",
    //   streetName: "",
    // },
    address: location.state.address,
    educationLevel: location.state.educationLevel,
    department: location.state.department,
    // image: "",
  };
  console.log("from edit app phoone : ", location.state.phoneNo);

  const gridStyle = {
    margin: "10px auto",
    padding: "10px",
    backgroundColor: "whitesmoke",
  };

  const paperStyle = {
    width: "90%",
    padding: "30px",
    margin: "20px auto",
    borderRadius: "20px",
    // backgroundColor: "whitesmoke",
  };

  const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
  ];

  // console.log(" xxx ", email);

  const [values, setValues] = useState(initialVal);
  console.log("valuesFname = ", values.firstName);

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
  // const btnStyle = {
  //   margin: "10px",
  //   padding: "10px 40px",
  // };
  const btnStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "10px",
    padding: "10px 40px",
    backgroundColor: "gray",
  };

  const [error, setError] = useState(false);
  const [sendingRequest, setSendingRequest] = useState(false);
  const [returnSecureToken, useReturnSecureToken] = useState(true);

  const handleInput = (field, e) => {
    let new_val = { ...values };
    new_val[field] = e.target.value;
    setValues(new_val);
    console.log(new_val[field]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // navigate("/");
    setSendingRequest(true);

    setError(false);
    try {
      const appInfo = values;
      const keyy = location.state.id;
      const response = await axios
        .patch(
          // "http://192.168.1.18:5000/api/employee/registerEmployee",
          "https://hr-proj-1234-default-rtdb.firebaseio.com/applicant/" +
            keyy +
            ".json",
          appInfo
        )

        .catch((e) => {
          console.log("err", e);
        });

      console.log(response);

      alert("Your Application is updated successfully !");

      navigate("/applicants");

      // navigate("/applicants", {state: {
      //   id: e.id,
      //   firstName: e.firstName,
      //   lastName: e.lastName,
      //   email: e.email,
      //   phoenNo: e.phoneNo,
      //   address: e.address,
      //   gender: e.gender,
      //   department: e.department,
      //   educationLevel: e.educationLevel,
      // }}),

      // console.log("wede applicants", response.data);
    } catch {
      console.log("Error caught", e);
      setError(true);
    } finally {
      setSendingRequest(false);
    }
  };

  return (
    <Grid style={gridStyle}>
      <Paper elevation={5} style={paperStyle}>
        <EditIcon /> Edit Applicant's inforamtion
        <form onSubmit={handleSubmit}>
          <Grid container style={{ padding: "20px", margin: "20px " }}>
            <Grid container item xs={6}>
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
            <Grid item xs={6}>
              <Radios
                label="Gender"
                name="gender"
                value={values.gender}
                onChange={(event) => {
                  handleInput("gender", event);
                }}
                items={genderItems}
              />
              {/* <div> */}
              <Selects
                name="department"
                value={values.department}
                label="Department"
                onChange={(event) => {
                  handleInput("department", event);
                }}
                options={depts()}
              />
              {/* </div> */}

              <Selects
                name="educationLevel"
                value={values.educationLevel}
                label="Education Level"
                onChange={(event) => {
                  handleInput("educationLevel", event);
                }}
                options={levels()}
              />
              <div>
                <Button variant="contained" type="submit" style={btnStyle}>
                  Update
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}

export default EditApp;
