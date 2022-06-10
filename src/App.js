import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Apply from "./components/Apply";
import AppForm from "./components/AppForm";

const App = () => {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/login" element={<LogIn />} />
    //     <Route path="/apply" element={<Apply />} />
    //   </Routes>
    // </Router>

    <AppForm />
  );
};

export default App;
