import React from "react";
import Row from "react-bootstrap/Row";
import "../css/patient.css";
function Patient() {
  return (
    <>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx}>
            <div className="patient-card">
              <div className="card-front">
                <p className="title">John Doe</p>
                <p className="subtitle">Appointment Date: 12/12/24</p>
              </div>
              <div className="card-back">
                <p>Gender: Male</p>
                <p>Age: 22</p>
                <p>Phone Number: 012345678</p>
                <p>Email: john@gmail.com</p>
              </div>
            </div>
          </div>
        ))}
      </Row>
    </>
  );
}

export default Patient;
