import { useState, useEffect } from "react";
import "../App.css";
import "../css/button.css";
import AdminNav from "./AdminNav";
import AdminSideNav from "./AdminSideNav";
import Doctor from "./Doctor";
import { NavLink } from "react-router-dom";
import { SERVER_URL } from "../../utils";
function AdminPage() {
  const styling = {
    marginLeft: "80%",
    marginTop: "5%",
  };
  const [doctors, setDoctors] = useState([]);

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
          setDoctors(data);
        })
        .catch((err) => console.log(err))
    );
  }, []);
  console.log(doctors);
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
