import "../css/doctor.css";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function PatientAppoint() {
  const image =
    "data:image/png;base64,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";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row
        xs={1}
        md={3}
        className="g-4"
        style={{ "--mdb-gutter-x": "-20.5rem" }}
      >
        {Array.from({ length: 10 }).map((_, idx) => (
          <Col key={idx}>
            <div className="doctorCard">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="category">DR. John Doe </div>
              <div className="heading">
                Appointment Date: 12/2/24 Time: 8:04
                <div className="author">
                  <Button variant="danger" onClick={handleShow}>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PatientAppoint;
