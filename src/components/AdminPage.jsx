import { useState, useEffect } from "react";
import "../App.css";
import "../css/button.css";
import AdminNav from "./AdminNav";
import AdminSideNav from "./AdminSideNav";
import Doctor from "./Doctor";
import { NavLink } from "react-router-dom";
function AdminPage() {
  const styling = {
    marginLeft: "80%",
    marginTop: "5%",
  };

  return (
    <>
      <div className="navbar">
        <AdminNav />
      </div>
      <AdminSideNav />
      <NavLink to="/admin-form">
        <button className="hire-button" style={styling}>
          <span className="text">Hire Another Doctor</span>
        </button>
      </NavLink>
      <Doctor />
    </>
  );
}

export default AdminPage;
