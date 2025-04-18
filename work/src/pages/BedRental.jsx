import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup, Alert, Image, Navbar, Card } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaSearch
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const BedRental = () => {
  // Bed types data with images
  const bedTypes = [
    {
      id: "single-bed",
      name: "Single Bed",
      image: "/single-bed.png"
    },
    {
      id: "double-bed",
      name: "Double Bed",
      image: "/double-bed.png"
    },
    {
      id: "queen-size-bed",
      name: "Queen Size Bed",
      image: "/queen-bed.png"
    },
    {
      id: "mattress",
      name: "Mattress",
      image: "/mattress.png"
    }
  ];

  // Bed type pricing options
  const bedPricing = [
    {
      id: "type-1",
      name: "Type 1",
      price: "₹499/month"
    },
    {
      id: "type-2",
      name: "Type 2",
      price: "₹699/month"
    },
    {
      id: "type-3",
      name: "Type 3",
      price: "₹899/month"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
  };

  return (
    <div className="me-2 ms-2 ps-2 pe-2 w-98">
      {/* Navbar */}
      <Navbar
        style={{ backgroundColor: "#FFD29E" }}
        expand="lg"
        className="rounded-4 mt-3 mb-3"
      >
        <Container>
          <Navbar.Brand className="mb-5">
            <img src="/duzo.png" alt="DUZO" width="100" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-5" />

          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex flex-column w-100">
              <div className="d-flex w-100 align-items-center justify-content-between gap-3 flex-wrap">
                <div className="flex-grow-1">
                  <Form
                    className="w-100"
                    style={{ minWidth: "200px", maxWidth: "400px" }}
                  >
                    <Form.Group className="input-group">
                      <div
                        className="d-flex align-items-center w-100 rounded-pill px-2"
                        style={{
                          backgroundColor: "#FFBE5D",
                          padding: "5px",
                          border: "none",
                        }}
                      >
                        <Form.Control
                          type="search"
                          placeholder="How can we help you?"
                          className="form-control border-0 shadow-none bg-transparent"
                        />
                        <img
                          src="/search.png"
                          alt="Search"
                          width="25"
                          height="25"
                          className="ms-2"
                        />
                      </div>
                    </Form.Group>
                  </Form>
                </div>

                <div style={{ minWidth: "150px", maxWidth: "200px" }}>
                  <Form className="w-100">
                    <Form.Group className="input-group">
                      <div
                        className="d-flex align-items-center w-100 rounded-pill px-2"
                        style={{
                          backgroundColor: "#FFBE5D",
                          padding: "5px",
                          border: "none",
                        }}
                      >
                        <Form.Control
                          type="text"
                          className="form-control border-0 shadow-none bg-transparent"
                        />
                        <img
                          src="/image.png"
                          alt="Image"
                          width="25"
                          height="25"
                          className="ms-2"
                        />
                      </div>
                    </Form.Group>
                  </Form>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <img src="/cart.png" width="26" height="26" alt="Cart" />
                  <img src="/user.png" width="26" height="26" alt="Profile" />
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Section - Simplified */}
      <Container fluid className="p-3 p-md-4 rounded-4 mt-3 mb-4 shadow" style={{ backgroundColor: "#ffbc7f" }}>
        <h2 className="fw-bold text-center mb-4">Single Beds</h2>

        {/* Image slots row */}
        <Row className="g-3 justify-content-center mb-4">
          {bedTypes.map((bed) => (
            <Col xs={6} md={3} key={bed.id}>
              <div className="text-center">
                <div 
                  style={{ 
                    width: "120px", 
                    height: "120px", 
                    borderRadius: "7.27px",
                    overflow: "hidden",
                    margin: "0 auto",
                    backgroundColor: "#ffd5a4"
                  }}
                >
                  <img 
                    src={bed.image} 
                    alt={bed.name}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover" 
                    }}
                    onError={(e) => {
                      e.target.src = "/default-bed.png";
                    }}
                  />
                </div>
                <p className="mt-2 fw-bold">{bed.name}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Pricing types - simplified */}
        <Form onSubmit={handleSubmit}>
          <Row className="g-3 justify-content-center">
            {bedPricing.map((type) => (
              <Col xs={12} md={4} key={type.id}>
                <Card 
                  className="h-100 border-0 shadow-sm"
                  style={{ borderRadius: "10px", overflow: "hidden" }}
                >
                  <Card.Body style={{ backgroundColor: "#ffd5a4" }}>
                    <Card.Title className="fw-bold fs-5 text-center mb-3">{type.name}</Card.Title>
                    <div className="text-center">
                      <span className="fw-bold fs-4">{type.price}</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <div className="text-center mt-4">
            <Button 
              type="submit" 
              variant="dark" 
              className="px-4 py-2 rounded-pill"
            >
              Continue to Booking
            </Button>
          </div>
        </Form>
      </Container>

      {/* Footer */}
      <Container
        fluid
        className="p-4 rounded-4 mt-1 text-center"
        style={{ backgroundColor: "#FFD29E" }}
      >
        <Row>
          <Col md={4}>
            <img src="/duzo.png" alt="DUZO" width="100" className="mb-2" />
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3 1a2 2 0 0 0-2 2c0 7.18 5.82 13 13 13a2 2 0 0 0 2-2v-2.35a1 1 0 0 0-1.02-1 8.92 8.92 0 0 1-3.62-.71 1 1 0 0 0-1.09.26l-1.43 1.43a11.27 11.27 0 0 1-4.52-4.52l1.43-1.43a1 1 0 0 0 .26-1.09 8.92 8.92 0 0 1-.71-3.62A1 1 0 0 0 3 1z" />
              </svg>{" "}
              Phone number
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
              </svg>{" "}
              E-mail address
            </p>
            <div className="d-flex justify-content-center gap-3">
              <p>
                <FaInstagram size={24} color="black" />
              </p>
              <p>
                <FaFacebook size={24} color="black" />
              </p>
              <div>
                <img
                  src="/TWIITERX.png"
                  alt="Twitter X Logo"
                  width="24"
                  height="24"
                />
              </div>
            </div>
          </Col>

          <Col md={4}>
            <h3>Services Available At</h3>
            <h3>Bengaluru</h3>
            <button
              className="btn btn-dark rounded-pill px-4 mt-2 text-black"
              style={{ backgroundColor: "#F7A13D" }}
            >
              BOOK NOW
            </button>
          </Col>

          <Col md={4}>
            <h3>Site Map</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Hiring
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Copyright Section */}
      <div
        className="mt-1 rounded-4 text-center d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#D28E26", height: "2rem" }}
      >
        <div>
          <img
            src="/copyright.png"
            alt="Copyright"
            width="26"
            height="26"
          />
        </div>
        2024 - DUZO
      </div>
    </div>
  );
};

export default BedRental;
