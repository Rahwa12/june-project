import React, { useEffect, useState } from "react";
import "./Navbar.css";

const { Link } = require("react-router-dom");

const Navbar = () => {
  //   const [loggedIn, setLoggedIn] = useState(false);

  return (
    <nav className="navbar" style={{ marginTop: "20px" }}>
      <Link className="hom" to="/" style={{ padding: "10px" }}>
        Home
      </Link>
      {/* {!loggedIn && (
        <div className="logSign">
          <Link to="/signup" style={{ padding: "10px" }}>
            <button style={{ color: "white" }}>SighUp</button>
          </Link> */}

      <Link to="/login" style={{ padding: "10px" }}>
        <button>LogIn</button>
      </Link>
      <Link
        to="/apply"
        style={{ padding: "10px", float: "right", marginRight: "20px" }}
      >
        <button>Apply</button>
      </Link>
    </nav>
  );
};

export default Navbar;
