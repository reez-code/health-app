import React from "react";
import Row from "react-bootstrap/Row";
import "../css/patient.css";
import { Col } from "react-bootstrap";
function Patient() {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col key={idx}>
            <div className="patient-card-container">
              <div className="patient-card">
                <div className="front-content">
                  <p>John Doe</p>
                </div>
                <div className="content">
                  <p className="heading">Appointment Date: 12/12/23</p>
                  <p>
                    Age: 23 <br />
                    Gender: Male <br />
                    Phone-Number: 012345678 <br />
                    Email: john@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Patient;
