import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Navbar, Modal } from "react-bootstrap";
import { FaBolt, FaWrench, FaTools, FaInstagram, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HomeServicesBanner from "../components/HomeServicesBanner";
import ServiceModal from "../components/popup/ServiceModal";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeServices = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState("");
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [errors, setErrors] = useState({});

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
    // Clear any previous errors when a service is selected
    setErrors({});
  };

  const handleServiceClick = (serviceName) => {
    setSelectedServiceType(serviceName);
    setShowServiceModal(true);
  };

  // Validate search inputs
  const validateInputs = () => {
    const newErrors = {};
    
    if (searchQuery.trim() && searchQuery.trim().length < 3) {
      newErrors.search = "Search query must be at least 3 characters long";
    }
    
    if (locationQuery.trim() && locationQuery.trim().length < 2) {
      newErrors.location = "Location must be at least 2 characters long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    // Clear error when user types
    if (errors.search) {
      setErrors(prev => ({ ...prev, search: null }));
    }
  };

  const handleLocationChange = (e) => {
    setLocationQuery(e.target.value);
    // Clear error when user types
    if (errors.location) {
      setErrors(prev => ({ ...prev, location: null }));
    }
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      console.log("Search:", searchQuery, "Location:", locationQuery);
      // Implement search functionality here
    }
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
            <Link to="/home">
              <img 
                src="/duzo.png" 
                alt="DUZO" 
                className="img-fluid"
                style={{ maxWidth: "100px", height: "auto" }} 
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <div className="d-flex flex-column w-100">
              <div className="d-flex w-100 align-items-center justify-content-between gap-3 flex-wrap">
                <div className="flex-grow-1 my-2 my-lg-0">
                  <Form className="w-100" onSubmit={handleSearch}>
                    <Form.Group className="input-group">
                      <div
                        className="d-flex align-items-center w-100 rounded-pill px-2"
                        style={{
                          backgroundColor: "#FFBE5D",
                          padding: "5px",
                          border: errors.search ? "2px solid #dc3545" : "none",
                        }}
                      >
                        <Form.Control
                          type="search"
                          placeholder="How can we help you?"
                          className="form-control border-0 shadow-none bg-transparent"
                          value={searchQuery}
                          onChange={handleSearchChange}
                          isInvalid={!!errors.search}
                        />
                        <button 
                          type="submit"
                          style={{ background: 'none', border: 'none' }}
                          onClick={handleSearch}
                        >
                          <img
                            src="/search.png"
                            alt="Search"
                            width="25"
                            height="25"
                            className="ms-2"
                          />
                        </button>
                      </div>
                      {errors.search && (
                        <div className="invalid-feedback d-block">
                          {errors.search}
                        </div>
                      )}
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
                          border: errors.location ? "2px solid #dc3545" : "none",
                        }}
                      >
                        <Form.Control
                          type="text"
                          placeholder="Enter location"
                          className="form-control border-0 shadow-none bg-transparent"
                          value={locationQuery}
                          onChange={handleLocationChange}
                          isInvalid={!!errors.location}
                        />
                        <img
                          src="/image.png"
                          alt="Location"
                          width="25"
                          height="25"
                          className="ms-2"
                        />
                      </div>
                      {errors.location && (
                        <div className="invalid-feedback d-block">
                          {errors.location}
                        </div>
                      )}
                    </Form.Group>
                  </Form>
                </div>

                <div className="d-flex align-items-center gap-2 my-2 my-lg-0">
                  <img src="/cart.png" width="26" height="26" alt="Cart" />
                  <Link to="/myaccount">
                    <img src="/user.png" width="26" height="26" alt="Profile" />
                  </Link>
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
                onClick={() => {
                  handleServiceSelect(service.title);
                  handleServiceClick(service.title);
                }}
              >
                <div 
                  className="rounded-4 overflow-hidden mb-3 mx-auto" 
                  style={{ 
                    width: '120px',
                    height: '120px',
                    maxWidth: '100%',
                    border: selectedService === service.title ? '3px solid #D28E26' : 'none',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
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
                style={{
                  backgroundColor: "#D28E26",
                  borderColor: "#D28E26",
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#B8761F";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#D28E26";
                }}
              >
                Continue with {selectedService}
              </Button>
            </Col>
          </Row>
        )}
      </Container>

      {/* Service Modal */}
      {showServiceModal && (
        <ServiceModal 
          show={showServiceModal}
          onHide={() => setShowServiceModal(false)}
          serviceType={selectedServiceType}
        />
      )}

      {/* Footer - Same as HomePage */}
      <div className="mt-0 mx-2 pt-0"> 
        <Footer />
        <Copyright />
      </div>
    </div>
  );
};

export default HomeServices;
