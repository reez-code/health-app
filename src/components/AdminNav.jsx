import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/admin">
            P.A.L.B
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="ms-auto">
              <NavDropdown title="Sign Up/Log In" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => handleShowModal("Admin")}>
                  Admin Login
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleShowModal("Doctor")}>
                  Doctor Login
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleShowModal("Patient")}>
                  Patient Login
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNav;
