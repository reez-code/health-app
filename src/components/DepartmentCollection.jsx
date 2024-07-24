import { Col, Row } from "react-bootstrap";
import Department from "./Department";

function DepartmentCollection({ specializations }) {
  return (
    <>
      <Row
        xs={1}
        md={3}
        className="g-4"
        style={{ "--mdb-gutter-x": "-20.5rem" }}
      >
        {specializations.map((specialization) => (
          <Col key={specialization.id}>
            <Department {...specialization} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default DepartmentCollection;
