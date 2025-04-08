import React from "react";
import { Container, Row, Col, Navbar, Form } from "react-bootstrap";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Appliance = () => {
  // Array of additional repair services
  const additionalServices = [
    { name: "Induction Repair", price: "xxx" },
    { name: "Refrigerator Repair", price: "xxx" },
    { name: "Microwave Repair", price: "xxx" },
    { name: "Mixer Repair", price: "xxx" },
    { name: "Dishwasher Repair", price: "xxx" },
    { name: "AC Repair", price: "xxx" },
    { name: "TV Repair", price: "xxx" },
    { name: "Fan Repair", price: "xxx" },
    { name: "Washing Machine Repair", price: "xxx" },
    { name: "Geyser Repair", price: "xxx" },
    { name: "Invertor Repair", price: "xxx" },
    { name: "Iron Repair", price: "xxx" },
    { name: "Laptops and Mobile Repair", price: "xxx" },
  ];

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

      {/* Content area - Appliance Repair Section with unified background */}
      <div className="my-5">
        <Container>
          <div className="p-3 rounded-4" style={{ backgroundColor: "#FFE8C8" }}>
            <Row>
              {/* Left side - Appliances Repair with 2 images side by side */}
              <Col md={4} className="mb-4">
                <div className="p-3">
                  <h2 className="text-center mb-4">Appliances Repair</h2>
                  <h3 className="text-center mb-4">Select your service</h3>
                  <div className="d-flex flex-row justify-content-between gap-2">
                    <div className="text-center">
                      <img
                        src="/appliance1.jpg"
                        alt="Appliance Repair"
                        className="img-fluid rounded-4 mb-2"
                        style={{ height: "140px", objectFit: "cover", width: "100%" }}
                      />
                      <p className="fw-bold">Kitchen</p>
                    </div>
                    <div className="text-center">
                      <img
                        src="/appliance2.jpg"
                        alt="Appliance Repair"
                        className="img-fluid rounded-4 mb-2"
                        style={{ height: "140px", objectFit: "cover", width: "100%" }}
                      />
                      <p className="fw-bold">Home</p>
                    </div>
                  </div>
                </div>
              </Col>
              
              {/* Middle divider - Black line */}
              <Col md={1} className="d-flex justify-content-center px-0">
                <div className="vr h-100" style={{ width: "2px", backgroundColor: "#000000" }}></div>
              </Col>
              
              {/* Right side - Services with scrollable content for all items */}
              <Col md={7}>
                <div className="p-3">
                  <h3 className="text-center mb-4">Available Services</h3>
                  
                  {/* Scrollable container for all services */}
                  <div 
                    className="overflow-auto" 
                    style={{ 
                      maxHeight: "500px", 
                      scrollbarWidth: "thin",
                      scrollbarColor: "#FFD29E transparent"
                    }}
                  >
                    <Row className="g-4">
                      {/* Original service items */}
                      <Col md={12}>
                        <div className="text-center p-3 rounded-4 h-100" style={{ backgroundColor: "#FFD29E" }}>
                          <Row className="align-items-center">
                            <Col md={5}>
                              <img
                                src="/kitchen.jpg"
                                alt="Kitchen Repair"
                                className="img-fluid rounded-4"
                                style={{ height: "120px", objectFit: "cover", width: "100%" }}
                              />
                            </Col>
                            <Col md={7} className="text-md-start text-center mt-md-0 mt-3">
                              <h5>Kitchen Repair</h5>
                              <p className="fw-bold">Rs 399</p>
                              <button className="btn rounded-pill text-white" style={{ backgroundColor: "#000000" }}>ADD</button>
                            </Col>
                          </Row>
                        </div>
                        <hr className="border-dark border-2 my-3" />
                      </Col>
                      <h2 className="text-center mb-4">Home</h2>
                      <Col md={12}>
                        <div className="text-center p-3 rounded-4 h-100" style={{ backgroundColor: "#FFD29E" }}>
                          <Row className="align-items-center">
                            <Col md={5}>
                              <img
                                src="/ac.jpg"
                                alt="AC Repair"
                                className="img-fluid rounded-4"
                                style={{ height: "120px", objectFit: "cover", width: "100%" }}
                              />
                            </Col>
                            <Col md={7} className="text-md-start text-center mt-md-0 mt-3">
                              <h5>AC Repair</h5>
                              <p className="fw-bold">Rs 599</p>
                              <button className="btn rounded-pill text-white" style={{ backgroundColor: "#000000" }}>ADD</button>
                            </Col>
                          </Row>
                        </div>
                        <hr className="border-dark border-2 my-3" />
                      </Col>
                      
                      <Col md={12}>
                        <div className="text-center p-3 rounded-4 h-100" style={{ backgroundColor: "#FFD29E" }}>
                          <Row className="align-items-center">
                            <Col md={5}>
                              <img
                                src="/gas-stove.jpg"
                                alt="Gas Stove Repair"
                                className="img-fluid rounded-4"
                                style={{ height: "120px", objectFit: "cover", width: "100%" }}
                              />
                            </Col>
                            <Col md={7} className="text-md-start text-center mt-md-0 mt-3">
                              <h5>Gas Stove Repair</h5>
                              <p className="fw-bold">Rs 299</p>
                              <button className="btn rounded-pill text-white" style={{ backgroundColor: "#000000" }}>ADD</button>
                            </Col>
                          </Row>
                        </div>
                        <hr className="border-dark border-2 my-3" />
                      </Col>
                      
                      {/* <Col md={12}>
                        <div className="text-center p-3 rounded-4 h-100" style={{ backgroundColor: "#FFD29E" }}>
                          <Row className="align-items-center">
                            <Col md={5}>
                              <img
                                src="/refrigerator.jpg"
                                alt="Refrigerator Repair"
                                className="img-fluid rounded-4"
                                style={{ height: "120px", objectFit: "cover", width: "100%" }}
                              />
                            </Col>
                            <Col md={7} className="text-md-start text-center mt-md-0 mt-3">
                              <h5>Refrigerator Repair</h5>
                              <p className="fw-bold">Rs 499</p>
                              <button className="btn rounded-pill text-white" style={{ backgroundColor: "#000000" }}>ADD</button>
                            </Col>
                          </Row>
                        </div>
                        <hr className="border-dark border-2 my-3" />
                      </Col> */}
                      
                      {/* Additional services */}
                      {additionalServices.map((service, index) => (
                        <Col md={12} key={index}>
                          <div className="text-center p-3 rounded-4 h-100" style={{ backgroundColor: "#FFD29E" }}>
                            <Row className="align-items-center">
                              <Col md={5}>
                                <img
                                  src={`/service${index % 4 + 1}.jpg`} // Placeholder image pattern
                                  alt={service.name}
                                  className="img-fluid rounded-4"
                                  style={{ height: "120px", objectFit: "cover", width: "100%" }}
                                />
                              </Col>
                              <Col md={7} className="text-md-start text-center mt-md-0 mt-3">
                                <h5>{service.name}</h5>
                                <p className="fw-bold">Rs {service.price}</p>
                                <button className="btn rounded-pill text-white" style={{ backgroundColor: "#000000" }}>ADD</button>
                              </Col>
                            </Row>
                          </div>
                          {index < additionalServices.length - 1 && (
                            <hr className="border-dark border-2 my-3" />
                          )}
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

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

export default Appliance;
