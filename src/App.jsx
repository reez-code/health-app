import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import "./App.css";
import AdminPage from "./components/AdminPage";
import AdminDoc from "./components/AdminDoc";
import DoctorPage from './components/DoctorPage';
import AdminDep from "./components/AdminDep";
import AdminPatient from "./components/AdminPatient";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <div className="content flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/doctors" element={<AdminDoc />} />
            <Route path="/admin/departments" element={<AdminDep />} />
       <Route path="/admin/patients" element={<AdminPatient />} />
            <Route path='/doctor' element={<DoctorPage/>}/>     
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
