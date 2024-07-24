import "../css/doctor.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
function Doctor({ name, image, specializations }) {
  return (
    <div className="doctorCard">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="category">Dr. {name} </div>
      <div className="heading">
        {specializations.name}
        <div className="author">
          <Button variant="primary">Details</Button>
          <Button variant="danger" style={{ marginLeft: "10px" }}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
