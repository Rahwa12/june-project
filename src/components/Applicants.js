import React, { useEffect, useState } from "react";
import "./Applicants.css";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Tempo from "./Tempo";
// import EditApp from "./EditApp";

function Applicants() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true);
  const [data, setData] = useState("");
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
  const handleDelete = async (e) => {
    const del = await axios.delete(
      // "http://192.168.1.18:5000/api/employee/registerEmployee",
      "https://hr-proj-1234-default-rtdb.firebaseio.com/applicant/" +
        e.id +
        ".json"
    );
    console.log("deleting : ", e);

    // console.log("deleting -- ", del);

    alert("Application deleted successfully !");

    function refreshPage() {
      window.location.reload(false);
    }
    refreshPage();
  };

  function handleEdit(e) {
    console.log("Editing", e);

    navigate("/editApp", {
      state: {
        id: e.id,
        firstName: e.firstName,
        lastName: e.lastName,
        email: e.email,
        phoneNo: e.phoneNo,
        address: e.address,
        gender: e.gender,
        department: e.department,
        educationLevel: e.educationLevel,
      },
    });
    // console.log("phone", e.phoneNo);
  }

  useEffect(
    () => async () => {
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

        const response = await axios
          .get(
            "https://hr-proj-1234-default-rtdb.firebaseio.com/applicant.json"
          )
          .then((res) => {
            const applicant = res.data;
            console.log(res);
            let a;
            let b = [];
            for (let key in applicant) {
              // console.log("iddd now key", key);

              // let a = Object.values(applicant);
              a = { ...applicant[key], id: key };
              b.push(a);

              // console.log("datas AAA ", a);
              // console.log("datas BBB ", b);
            }
            setData(b);
          })
          .catch((e) => {
            console.log("err", e);
          });

        console.log(response.data.name);
      } catch {
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
            <th>FULL NAME</th>
            <th style={{ width: "10%" }}>GENDER</th>
            <th>EMAIL</th>
            <th>PHONE NO</th>
            <th>ADDRESS</th>
            <th>DEPARTMENT</th>
            <th style={{ width: "10%" }}>EDU LEVEL</th>
            <th style={{ width: "16.5%", textAlign: "center" }}>ACTIONS</th>
          </tr>
        </table>
        {data ? (
          data.map((d, index) => (
            <table>
              <tr>
                <Tempo d={d} />
                <td style={{ width: "16.5%" }}>
                  <button
                    className="btn"
                    style={{ margin: "3% 8%" }}
                    onClick={() => {
                      handleEdit(d);
                    }}
                  >
                    edit
                  </button>
                  <button
                    className="btn"
                    style={{ margin: "3% 8%" }}
                    onClick={() => {
                      handleDelete(d);
                    }}
                  >
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
