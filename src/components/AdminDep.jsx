import React from "react";
import AdminNav from "./AdminNav";
import AdminSideNav from "./AdminSideNav";
import Department from "./Department";
import { useState, useEffect } from "react";
import { SERVER_URL } from "../../utils";
import DepartmentCollection from "./DepartmentCollection";
function AdminDep() {
  const [specializations, setSpecializations] = useState([]);

  useEffect(() => {
    fetch(`${SERVER_URL}/specializations`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcyMTczMDc4MCwianRpIjoiMGI2OWJmYzYtNjNmNC00YjUzLWJiYmYtMmJkNzZhYzU5NDc4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6NDEsIm5iZiI6MTcyMTczMDc4MCwiY3NyZiI6ImVjYWY5ZTVlLTFmZGEtNDAyZS04MzBkLTYyZDgzY2QyMzVkZCIsImV4cCI6MTcyMTgxNzE4MCwicm9sZSI6ImFkbWluIn0.TIWZpe3hwEFQnOwNrnp9Z8o0geYa18narnBh_UBko4Y",
      },
    }).then((res) =>
      res
        .json()
        .then((data) => {
          setSpecializations(data);
        })
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <>
      <div className="navbar">
        <AdminNav />
      </div>
      <AdminSideNav />
      <DepartmentCollection specializations={specializations} />
    </>
  );
}

export default AdminDep;
