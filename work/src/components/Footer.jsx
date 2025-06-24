import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div>
      <Container
          fluid
          className="p-4 rounded-4 mt-2 text-center"
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
                +91 86187 05796
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
                customercare@duzo.in
              </p>
              <div className="d-flex justify-content-center gap-3">
                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open('https://www.instagram.com/duzo.in/', '_blank', 'noopener,noreferrer')}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <FaInstagram 
                    size={24} 
                    color="black" 
                    style={{ transition: 'transform 0.2s ease' }}
                  />
                </div>

                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open('facebook', '_blank', 'noopener,noreferrer')}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <FaFacebook 
                    size={24} 
                    color="black" 
                    style={{ transition: 'transform 0.2s ease' }}
                  />
                </div>

                <div
                  style={{ cursor: 'pointer' }}
                  onClick={() => window.open('twitter', '_blank', 'noopener,noreferrer')}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img
                    src="/TWIITERX.png"
                    alt="Twitter X Logo"
                    width="24"
                    height="24"
                    style={{ transition: 'transform 0.2s ease' }}
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
                  <Link to="/home" className="text-decoration-none">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/hiring" className="text-decoration-none">
                    Hiring
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-decoration-none">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-decoration-none">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Footer
