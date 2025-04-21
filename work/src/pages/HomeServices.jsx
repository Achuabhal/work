import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Navbar, Modal } from "react-bootstrap";
import { FaBolt, FaWrench, FaTools, FaInstagram, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HomeServicesBanner from "../components/HomeServicesBanner";
import ServiceModal from "../components/popup/ServiceModal";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeServices = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState("");

  // Service type icons
  const serviceIcons = {
    Electrician: <FaBolt size={30} />,
    Plumber: <FaWrench size={30} />,
    Carpenter: <FaTools size={30} />
  };

  // Service pricing information
  const servicePricing = {
    Electrician: { startPrice: 499, icon: <FaBolt size={24} /> },
    Plumber: { startPrice: 399, icon: <FaWrench size={24} /> },
    Carpenter: { startPrice: 599, icon: <FaTools size={24} /> }
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleServiceClick = (serviceName) => {
    setSelectedServiceType(serviceName);
    setShowServiceModal(true);
  };

  return (
    <div className="container-fluid px-2 px-md-3 px-lg-4">
      {/* Navbar - Improved responsiveness */}
      <Navbar
        style={{ backgroundColor: "#FFD29E" }}
        expand="lg"
        className="rounded-4 my-3"
      >
        <Container fluid>
          <Navbar.Brand className="py-2">
            <img 
              src="/duzo.png" 
              alt="DUZO" 
              className="img-fluid"
              style={{ maxWidth: "100px", height: "auto" }} 
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex flex-column w-100">
              <div className="d-flex w-100 align-items-center justify-content-between gap-3 flex-wrap">
                <div className="flex-grow-1 my-2 my-lg-0">
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

                <div className="my-2 my-lg-0" style={{ minWidth: "150px", maxWidth: "200px" }}>
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

                <div className="d-flex align-items-center gap-2 my-2 my-lg-0">
                  <img src="/cart.png" width="26" height="26" alt="Cart" />
                  <img src="/user.png" width="26" height="26" alt="Profile" />
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Added HomeServicesBanner */}
      <HomeServicesBanner />

      {/* Main Section - Improved responsiveness */}
      <Container fluid className="p-3 p-md-4 rounded-4 my-3 shadow position-relative" style={{ backgroundColor: "#ffbc7f" }}>
        {/* Custom Header with responsive dimensions */}
        <div className="position-relative mb-4 mb-md-5">
          <div className="px-2 px-md-4">
            <h2 className="fw-bold text-center text-md-start">Electrician Plumber</h2>
            <h2 className="fw-bold text-center text-md-start">And Carpenter</h2>
          </div>
        </div>

        <Row className="mt-3 mt-md-5 pt-2 pt-md-4">
          <Col xs={12}>
            <h4 className="fw-bold mb-4 text-center">Choose your Service</h4>
          </Col>
        </Row>

        {/* Service Images in Row - Responsive grid */}
        <Row className="justify-content-center g-4">
          {[
            { image: "/electrician.png", title: "Electrician" },
            { image: "/plumber.png", title: "Plumber" },
            { image: "/carpenter.png", title: "Carpenter" },
          ].map((service, index) => (
            <Col key={index} xs={6} sm={6} md={4} className="d-flex justify-content-center">
              <div 
                className="text-center" 
                style={{ cursor: 'pointer' }}
                onClick={() => handleServiceClick(service.title)}
              >
                <div 
                  className="rounded-4 overflow-hidden mb-3 mx-auto" 
                  style={{ 
                    width: '120px',
                    height: '120px',
                    maxWidth: '100%',
                    border: selectedService === service.title ? '3px solid #D28E26' : 'none',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                  }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover' 
                    }}
                    onError={(e) => {
                      e.target.src = "/appliance-default.jpg"; // Fallback image
                    }}
                  />
                </div>
                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">
                  Starts at ₹{servicePricing[service.title].startPrice}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Image Section - Responsive */}
        <Row className="mt-4 mt-md-5">
          <Col xs={12} className="text-center">
            <img 
              src="/handyman.png" 
              alt="Home Services" 
              style={{ 
                maxHeight: '180px',
                maxWidth: '100%',
                height: 'auto'
              }}
              className="img-fluid mx-auto d-block"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/200x140?text=Home+Services";
              }}
            />
          </Col>
        </Row>

        {/* Continue Button - Only shown when a service is selected */}
        {selectedService && (
          <Row className="mt-4">
            <Col xs={12} className="text-center">
              <Button 
                variant="dark" 
                className="px-4 py-2"
                onClick={() => handleServiceClick(selectedService)}
              >
                Continue with {selectedService}
              </Button>
            </Col>
          </Row>
        )}
      </Container>

      {/* Footer - Improved responsiveness */}
      <Container
        fluid
        className="p-3 p-md-4 rounded-4 mt-1 text-center"
        style={{ backgroundColor: "#FFD29E" }}
      >
        <Row className="gy-4">
          <Col xs={12} md={4} className="text-center text-md-start">
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
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <FaInstagram size={24} color="black" />
              <FaFacebook size={24} color="black" />
              <img
                src="/TWIITERX.png"
                alt="Twitter X Logo"
                width="24"
                height="24"
              />
            </div>
          </Col>

          <Col xs={12} md={4}>
            <h3>Services Available At</h3>
            <h3>Bengaluru</h3>
            <button
              className="btn btn-dark rounded-pill px-4 mt-2 text-black"
              style={{ backgroundColor: "#F7A13D" }}
            >
              BOOK NOW
            </button>
          </Col>

          <Col xs={12} md={4} className="text-center text-md-start">
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
        className="mt-1 rounded-4 text-center d-flex justify-content-center align-items-center py-2"
        style={{ backgroundColor: "#D28E26", height: "auto", minHeight: "2rem" }}
      >
        <div>
          <img
            src="/copyright.png"
            alt="Copyright"
            width="26"
            height="26"
          />
        </div>
        <span className="ms-2">2024 - DUZO</span>
      </div>

      {/* Service Modal */}
      {showServiceModal && (
        <ServiceModal 
          show={showServiceModal}
          onHide={() => setShowServiceModal(false)}
          serviceType={selectedServiceType}
        />
      )}
    </div>
  );
};

export default HomeServices;
