import React from "react";
import AdminNav from "./AdminNav";
import AdminSideNav from "./AdminSideNav";
import Patient from "./Patient";
function AdminPatient() {
  return (
    <>
      <div className="navbar">
        <AdminNav />
      </div>
      <AdminSideNav />
      <Patient />
    </>
  );
}

export default AdminPatient;
