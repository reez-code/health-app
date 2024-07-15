import React from "react";
import AdminNav from "./AdminNav";
import AdminSideNav from "./AdminSideNav";
import Doctor from "./Doctor";

function AdminDoc() {
  return (
    <>
      <div className="navbar">
        <AdminNav />
      </div>
      <AdminSideNav />
      <Doctor />
    </>
  );
}

export default AdminDoc;
