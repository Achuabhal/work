import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Faq = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pinCode: "",
    aadharNumber: "",
    panNumber: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
    
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    
    if (!formData.pinCode.trim()) {
      newErrors.pinCode = "PIN code is required";
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = "PIN code must be 6 digits";
    }
    
    if (!formData.aadharNumber.trim()) {
      newErrors.aadharNumber = "Aadhar number is required";
    } else if (!/^\d{12}$/.test(formData.aadharNumber)) {
      newErrors.aadharNumber = "Aadhar number must be 12 digits";
    }
    
    if (!formData.panNumber.trim()) {
      newErrors.panNumber = "PAN number is required";
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber)) {
      newErrors.panNumber = "PAN number format is invalid";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validateForm()) {
      // Process the form submission
      console.log("Form submitted:", formData);
      // Add your submission logic here
      alert("Application submitted successfully!");
    }
  };

  // Common input style with #fef5e4 background color
  const inputStyle = {
    backgroundColor: "#fef5e4",
  };

  return (
    <div className="me-2 ms-2 ps-2 pe-2 w-98">
      {/* Navbar */}
      <Container
        fluid
        style={{ backgroundColor: "#FFD29E" }}
        className="rounded-4 mt-2 mb-2 p-3"
      >
        <Row className="align-items-center">
          <Col xs={6} md={3}>
            <img src="/duzo.png" alt="DUZO" width="100" />
          </Col>
          <Col xs={6} md={9} className="d-flex justify-content-end">
            <div className="d-flex align-items-center gap-2">
              <img src="/cart.png" width="26" height="26" alt="Cart" />
              <img src="/user.png" width="26" height="26" alt="Profile" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* FAQ Heading */}
      <Container fluid className="text-center mt-2 mb-2">
        <h1 className="fw-bold">FAQ</h1>
      </Container>

      {/* Main Content - Only the form with background color #ffcc7d*/}
      <Container fluid className="p-3 p-md-4 rounded-4 mt-2 mb-2 shadow" style={{ backgroundColor: "#ffcc7d" }}>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Card className="p-3 rounded-4 shadow-sm" style={{ backgroundColor: "#ffcc7d", border: "none" }}>
              <Card.Body>
                <h3 className="fw-bold mb-3 text-center">Applying For Role</h3>
                <Form onSubmit={handleSubmit}>
                  <h5 className="mb-3">General Details</h5>
                  
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name*</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          isInvalid={submitted && errors.firstName}
                          className="rounded-pill"
                          style={inputStyle}
                        />
                        <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name*</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          isInvalid={submitted && errors.lastName}
                          className="rounded-pill"
                          style={inputStyle}
                        />
                        <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>E-mail Address*</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          isInvalid={submitted && errors.email}
                          className="rounded-pill"
                          style={inputStyle}
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number*</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          isInvalid={submitted && errors.phone}
                          className="rounded-pill"
                          style={inputStyle}
                        />
                        <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
  <Form.Label>Address*</Form.Label>
  <Form.Control
    as="textarea"
    rows={1}
    name="address"
    value={formData.address}
    onChange={handleInputChange}
    isInvalid={submitted && errors.address}
    className="rounded-pill"
    style={{
      ...inputStyle,
      height: "45px",
      paddingTop: "10px"
    }}
  />
  <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
</Form.Group>

                  
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>City*</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          isInvalid={submitted && errors.city}
                          className="rounded-pill"
                          style={inputStyle}
                        />
                        <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Pin Code*</Form.Label>
                        <Form.Control
                          type="text"
                          name="pinCode"
                          value={formData.pinCode}
                          onChange={handleInputChange}
                          isInvalid={submitted && errors.pinCode}
                          className="rounded-pill"
                          style={inputStyle}
                        />
                        <Form.Control.Feedback type="invalid">{errors.pinCode}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Aadhar Card Number*</Form.Label>
                        <Form.Control
                          type="text"
                          name="aadharNumber"
                          value={formData.aadharNumber}
                          onChange={handleInputChange}
                          isInvalid={submitted && errors.aadharNumber}
                          className="rounded-pill"
                          style={inputStyle}
                        />
                        <Form.Control.Feedback type="invalid">{errors.aadharNumber}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>PAN Card Number*</Form.Label>
                        <Form.Control
                          type="text"
                          name="panNumber"
                          value={formData.panNumber}
                          onChange={handleInputChange}
                          isInvalid={submitted && errors.panNumber}
                          className="rounded-pill"
                          style={inputStyle}
                        />
                        <Form.Control.Feedback type="invalid">{errors.panNumber}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <div className="d-flex align-items-center mb-3">
                  <Form.Check 
                  type="checkbox" 
                  id="offline-test-checkbox"
                  className="me-2"
                 />
                 <p className="text-muted mb-0">Offline Test will be conducted based on your role.</p>
               </div>

                  
                  <div className="text-center">
                    <Button type="submit" variant="dark" className="px-4 rounded-pill">Submit</Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
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
        className="mt-2 rounded-4 text-center d-flex justify-content-center align-items-center"
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

export default Faq;

