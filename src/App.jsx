import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import Doctor from "./components/Doctor";
import DoctorDetails from "./components/DoctorDetails";

function App() {
  return (
    <Router>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<Doctor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
