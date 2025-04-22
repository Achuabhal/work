import React from "react";
import { Container, Row, Col, Form, Navbar, Nav } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <>
<div className=" me-2 ms-2 ps-2 pe-2 w-98">
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
        <Container fluid className="my-5 ms-0">
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
          <div className="mt-0 mx-2 pt-0"> 
                            <Footer />
            
                          <Copyright />
                        </div>
      </div>
    </>
  );
};

export default AboutUs;
