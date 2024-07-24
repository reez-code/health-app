import { useState, useEffect } from "react";
import AdminNav from "./AdminNav";
import AdminSideNav from "./AdminSideNav";
import Patient from "./Patient";
import PatientCollection from "./PatientCollection";
import { SERVER_URL } from "../../utils";
function AdminPatient() {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch(`${SERVER_URL}/patients`, {
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
          console.log(data);
          setPatients(data);
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
      <PatientCollection patients={patients} />
    </>
  );
}

export default AdminPatient;
