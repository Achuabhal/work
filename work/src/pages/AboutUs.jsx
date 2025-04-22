import React from "react";
import { Container, Row, Col, Form, Navbar, Nav } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Navbarab from "../components/navbarhome";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <>
<div className=" me-2 ms-2 ps-2 pe-2 w-98">
{/* Navbar */}
      <Navbarab />
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
