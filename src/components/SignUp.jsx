import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SignUp = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <img
            src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?t=st=1721043471~exp=1721047071~hmac=9e8f14d51d1048b5cbb4e38bef4349f51ebb32c87a501e021a1637bb1293e398&w=740"
            alt="Signup Image"
            className="img-fluid"
          />
        </Col>
        <Col md={6}>
          <div className="signup-form">
            <h2 className="mb-4">Sign Up</h2>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
