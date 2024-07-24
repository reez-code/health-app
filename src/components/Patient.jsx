import React from "react";
import Row from "react-bootstrap/Row";
import "../css/patient.css";
import { Col } from "react-bootstrap";
function Patient({ name, age, gender, phone_number, email, diagnosis }) {
  return (
    <>
      <div className="patient-card-container">
        <div className="patient-card">
          <div className="front-content">
            <p>{name}</p>
          </div>
          <div className="content">
            <p className="heading">Diagnosis: {diagnosis}</p>
            <p>
              Age: {age} <br />
              Gender: {gender} <br />
              Phone-Number: {phone_number} <br />
              Email: {email}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Patient;
