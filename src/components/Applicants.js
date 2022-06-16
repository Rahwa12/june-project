import React, { useEffect, useState } from "react";
import "./Applicants.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Tempo from "./Tempo";
import EditApp from "./EditApp";

function Applicants() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true);
  const [data, setData] = useState(null);
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

  const logOut = () => {
    setLoggedIn(false);
    navigate("/");
  };
  function handleDelete(e) {
    console.log("delete");

    // const del = axios.get(
    //   "https://react-project-da4ec-default-rtdb.firebaseio.com/employee.json?name=rahwa"
    // );
  }

  function handleEdit(e) {
    console.log("Edit");
    // navigate("/editApp", {id: id} );
    console.log("id", e);
  }

  useEffect(
    () => async () => {
      // e.preventDefault();
      // navigate("/");
      setSendingRequest(true);
      setError(false);
      try {
        const appInfo = {
          // idd,
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
        // empRef.push(employeeInfo);

        const response = await axios
          .get(
            "https://hr-proj-1234-default-rtdb.firebaseio.com/applicant.json"
          )
          .then((res) => {
            const applicant = res.data;
            let a = Object.values(applicant);
            setData(a);
            console.log("first", data);
            console.log("first", a);

            let x = [];
            // console.log(empl);
            for (let key in applicant) {
              let idd = key;
              // console.log(empl[key].name);
              // setEmploy([empl[key].name, ...employ]);
              console.log(idd);
              x = [...x, { ...applicant[key], id: idd }];
            }
            // console.log(idd);
          })
          .catch((e) => {
            console.log("err", e);
          });

        console.log(response.data.name);
        // navigate("/registered");
      } catch {
        // errroneous response
        setError(true);
      } finally {
        setSendingRequest(false);
      }
    },
    []
  );

  return (
    <div>
      {loggedIn ? (
        <button
          style={{
            float: "right",
            backgroundColor: "whitesmoke",
            marginRight: "50px",
          }}
          onClick={logOut}
        >
          Log Out
        </button>
      ) : (
        <></>
      )}
      <div>
        <h1>Applicants</h1>

        <table>
          <tr>
            <th>Full Name</th>
            <th>Gender</th>
            <th>EMAIL</th>
            <th>PHONE NO</th>
            <th>ADDRESS</th>
            <th>DEPARTMENT</th>
            <th>EDU LEVEL</th>
            <th>ACTIONS</th>
          </tr>
        </table>
        {data ? (
          data.map((d, index) => (
            <table>
              <tr>
                <Tempo d={d} />
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      handleEdit(d);
                    }}
                  >
                    edit
                  </button>
                  <button className="btn" onClick={handleDelete}>
                    delete
                  </button>
                </td>
              </tr>
            </table>
          ))
        ) : (
          <h3 style={{ textAlign: "center" }}>Loading</h3>
        )}
      </div>
    </div>
  );
}

export default Applicants;
