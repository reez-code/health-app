import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../App.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import NavBar from "./NavBar";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h1>
                Nostrud velit minim ea incididunt ipsum cillum veniam quis et
                aliquip nostrud tempor duis.
              </h1>
              <p>
                Nostrud commodo consectetur eiusmod do dolore qui quis fugiat id
                non.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
            <Carousel.Caption>
              <h1>
                Ea sint id irure deserunt laboris voluptate non officia anim
                proident aliqua.
              </h1>
              <p>Sit ullamco esse qui consequat mollit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
            <Carousel.Caption>
              <h1>
                Sit commodo quis non minim non incididunt reprehenderit mollit
                Lorem.
              </h1>
              <p>
                Ad ullamco deserunt ipsum eiusmod duis culpa duis et voluptate
                ea ea proident.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className="my-5">
        <Row>
          <Col id="about">
            <h2>About Us</h2>
            <p>
              Welcome to our website! We are dedicated to providing the best
              service possible. Our team of professionals is committed to
              ensuring you have a great experience. We offer a wide range of
              services to meet your needs.
            </p>
            <p>
              Our mission is to deliver top-quality service with a personal
              touch. We believe in building lasting relationships with our
              clients, and we strive to exceed your expectations with every
              interaction.
            </p>
            <p>Thank you for choosing us. We look forward to serving you!</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
