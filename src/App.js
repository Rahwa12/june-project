import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Apply from "./components/Apply";
// import AppForm from "./components/AppForm";
import Applicants from "./components/Applicants";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/applicants" element={<Applicants />} />
      </Routes>
    </Router>

    // <AppForm />
    // <Applicants />
    // <Home />
  );
};

export default App;
