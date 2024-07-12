import React from "react";
import AdminNav from "./AdminNav";
import AdminSideNav from "./AdminSideNav";
import Department from "./Department";

function AdminDep() {
  return (
    <>
      <div className="navbar">
        <AdminNav />
      </div>
      <AdminSideNav />
      <Department />
    </>
  );
}

export default AdminDep;
