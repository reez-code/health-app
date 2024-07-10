import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home">P.A.L.B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
</Nav>
<Nav className='ms-auto'>
            <NavDropdown title="Sign Up/Log In" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Admin Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Doctor Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Patient Login</NavDropdown.Item>


            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;