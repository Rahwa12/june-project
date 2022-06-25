import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Apply from "./components/Apply";
import Applicants from "./components/Applicants";
import EditApp from "./components/EditApp";
import Headers from "./components/Headers";

const App = () => {
  return (
    <Router>
      <Headers />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/editApp" element={<EditApp />} />
        <Route path="/applicants" element={<Applicants />} />
      </Routes>
    </Router>

    // <EditApp />
    // <Applicants />
    // <Headers />
  );
};

export default App;
