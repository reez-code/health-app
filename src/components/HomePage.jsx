import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "../App.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import AboutUs from "./AboutUs";
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
              Your Health, Our Priority
              </h1>
              <p>
              Experience top-notch healthcare services with our state-of-the-art facilities and dedicated medical professionals
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Second slide" />
            <Carousel.Caption>
              <h1>
                Comprehensive Care For all.
              </h1>
              <p>Our integrated healthcare system ensures you receive the best possible treatment and support every step of the way.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
            <Carousel.Caption>
              <h1>
              Advanced Medical Solutions
              </h1>
              <p>
              Utilizing the latest technology and innovative approaches, we provide efficient and effective healthcare solutions.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <AboutUs />
      
      <Footer />
    </>
  );
};

export default HomePage;
