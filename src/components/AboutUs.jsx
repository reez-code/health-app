import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../assets/aboutImage.jpg";
import goalImage from "../assets/goalImage.jpg";
import "../App.css";

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <Container fluid className="about-section">
        <Row className="align-items-center">
          <Col md={6} className="about-left">
            <div className="about-content">
              <h2 className="section-title">Welcome to HealthSync</h2>
              <p className="section-text">
                We are dedicated to revolutionizing healthcare with innovative
                solutions and compassionate care.
              </p>
            </div>
          </Col>
          <Col md={6} className="about-right">
            <img
              src={aboutImage}
              alt="About Us"
              className="img-fluid fixed-image"
            />
          </Col>
        </Row>
      </Container>

      <Container fluid className="about-section">
        <Row className="align-items-center">
          <Col md={6} className="about-vertical">
            <h3 className="section-title">About Us</h3>
          </Col>
          <Col md={6} className="about-middle">
            <p className="section-text">
              At HealthSync, we strive to provide exceptional healthcare
              management services that exceed expectations.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="about-section">
        <Row className="align-items-center">
          <Col md={6} className="about-left">
            <img
              src={goalImage}
              alt="Our Goal"
              className="img-fluid fixed-image"
            />
          </Col>
          <Col md={6} className="about-right">
            <div className="about-content">
              <h3 className="section-title">Our Goal</h3>
              <p className="section-text">
                Our goal is to empower individuals and healthcare providers
                through seamless healthcare management solutions.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
