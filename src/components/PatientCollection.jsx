import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import Patient from "./Patient";
function PatientCollection({ patients }) {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {patients.map((patient) => (
          <Col key={patient.id}>
            <Patient {...patient} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default PatientCollection;
