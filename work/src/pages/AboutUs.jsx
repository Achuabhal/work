import React from "react";
import { Container, Row, Col, Form, Navbar, Nav } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <>
      <div className="me-3 w-100">
        {/* Navbar */}

        <Navbar
          style={{ backgroundColor: "#FFD29E" }}
          expand="lg"
          className="rounded-4 my-3 "
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

                <div className="w-100 d-flex justify-content-start mt-2 px-3">
                  <Nav className="d-flex gap-3 flex-wrap">
                    <Nav.Link href="#">Homes</Nav.Link>
                    <Nav.Link href="#">Beauty</Nav.Link>
                    <Nav.Link href="#">Automobile</Nav.Link>
                    <Nav.Link href="#">Buy/Rent</Nav.Link>
                  </Nav>
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* About us */}
        <Container
          className="p-4 p-md-5 rounded-4 text-center"
          style={{
            backgroundColor: "#FDCC82",
            borderRadius: "20px",
            maxWidth: "100%",
            minHeight: "20rem",
            margin: "auto",
          }}
        >
          <h2>About Us</h2>
        </Container>

        {/* Our Team*/}
        <Container fluid className="my-5">
          <h2 className="text-center mb-4">OUR TEAM</h2>
          <Row className="g-12 text-center">
            {[...Array(4)].map((_, index) => (
              <Col key={index} xs={12} sm={6} md={3}>
                <div className="border-0 text-center p-3">
                  <div
                    className="rounded-4"
                    style={{ height: "150px", backgroundColor: "#A8A8A8" }}
                  ></div>
                  <div
                    className="rounded-4"
                    style={{ height: "150px", backgroundColor: "#FFC998" }}
                  >
                    <h5 className="mt-2">Name</h5>
                    <p className="mb-1">Position</p>
                    <p className="text-muted">*Short Note*</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* FAQ Section */}
        <Container
          className="p-4 rounded-4 my-4"
          style={{
            backgroundColor: "#F5BD6A",
            textAlign: "left",
            maxWidth: "100%",
            minHeight: "250px",
          }}
        >
          <h2 className="mb-3 text-start ">
            Frequently Asked Questions (FAQ'S)
          </h2>
          <details>
            <summary className="fw-bold"></summary>
            <p></p>
          </details>
          <details>
            <summary className="fw-bold"></summary>
            <p></p>
          </details>
          <details>
            <summary className="fw-bold">Questions</summary>
            <p></p>
          </details>
          <details>
            <summary className="fw-bold"></summary>
            <p></p>
          </details>
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
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-.5a.5.5 0 0 0-.496.438L8 8.6l6.496-4.663A.5.5 0 0 0 14 3.5H2zm12 10V5.6l-5.504 3.94a.5.5 0 0 1-.992 0L2 5.6V13h12z" />
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
          className="mt-1 rounded-4 text-center  d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#D28E26", height: "2rem" }}
        >
          <div>
            <img
              src="/copyright.png"
              alt="Twitter X Logo"
              width="26"
              height="26"
            />
          </div>

          2024 - DUZO
        </div>
      </div>
    </>
  );
};

export default AboutUs;
