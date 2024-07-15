// NavBar.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link as ScrollLink } from 'react-scroll';
import LoginForm from './LogIn';


function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const [currentUserType, setCurrentUserType] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleShowModal = (userType) => {
    setCurrentUserType(userType);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const handleLogin = (userType) => {
    setIsLoggedIn(true);
    setShowModal(false);
    if (userType === 'Doctor') {
      navigate('/doctor');
    }else if (userType === 'Admin'){
      navigate ('/admin');
    }else if (userType === 'Patient'){
      navigate('/Patient')
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
          <Navbar.Brand as={Link} to="/">HealthSync</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={ScrollLink} to="about" smooth={true} duration={100}>About</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <NavDropdown title="Sign Up/Log In" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={() => handleShowModal('Admin')}>Admin Login</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleShowModal('Doctor')}>Doctor Login</NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleShowModal('Patient')}>Patient Login</NavDropdown.Item>
                <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <LoginForm userType={currentUserType} show={showModal} handleClose={handleCloseModal} handleLogin={handleLogin} />
    </>
  );
}

export default NavBar;
