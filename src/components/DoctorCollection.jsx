import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Doctor from "./Doctor";

function DoctorCollection({ doctors }) {
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
            <Doctor {...doctor} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default DoctorCollection;
