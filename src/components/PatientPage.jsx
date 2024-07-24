import { useState, useEffect } from "react";
import { SERVER_URL } from "../../utils";
import PatientNav from "./PatientNav";
import PatientSide from "./PatientSide";
import "../App.css";
import Appointment from "./Appointment";
import AppointmentCollection from "./AppointmentCollection";

function PatientPage() {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch(`${SERVER_URL}/doctors`, {
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
  return (
    <>
      <div className="navbar">
        <PatientNav />
      </div>
      <PatientSide />
      <AppointmentCollection doctors={doctors} />
    </>
  );
}

export default PatientPage;
