import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import "./App.css";
import AdminPage from "./components/AdminPage";
import DoctorPage from "./components/DoctorPage";
import AdminDep from "./components/AdminDep";
import AdminPatient from "./components/AdminPatient";
import SignUp from "./components/SignUp";
import PatientPage from "./components/PatientPage";
import AppointPage from "./components/AppointPage";
import AdminForm from "./components/AdminForm";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <div className="content flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/doctors" element={<AdminPage />} />
            <Route path="/admin/departments" element={<AdminDep />} />
            <Route path="/admin/patients" element={<AdminPatient />} />
            <Route path="/doctor" element={<DoctorPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/patient" element={<PatientPage />} />
            <Route path="/patient/appointments" element={<AppointPage />} />
            <Route path="/admin-form" element={<AdminForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
