import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Appointment from "./Appointment";

function AppointmentCollection({ doctors }) {
  return (
    <>
      <Row
        xs={1}
        md={3}
        className="g-4"
        style={{ "--mdb-gutter-x": "-20.5rem" }}
      >
        {doctors.map((doctor) => (
          <Col key={doctor.id}>
            <Appointment {...doctor} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AppointmentCollection;
