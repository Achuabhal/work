import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, InputGroup, Modal, Alert, Image, Navbar, Nav } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaSearch
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const ChefForParty = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    people: "",
    starters: 0,
    mainCourse: 0,
    desserts: 0,
    sides: 0
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showMainContent, setShowMainContent] = useState(true);
  const [bookedSlots, setBookedSlots] = useState([]); // Store booked date-time combinations

  // Load booked slots from localStorage on component mount
  useEffect(() => {
    const savedBookings = localStorage.getItem('chefBookings');
    if (savedBookings) {
      setBookedSlots(JSON.parse(savedBookings));
    }
  }, []);

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Check if a date-time slot is already booked
  const isSlotBooked = (date, time) => {
    return bookedSlots.some(slot => slot.date === date && slot.time === time);
  };

  // Save booking to localStorage
  const saveBooking = (date, time) => {
    const newBooking = { date, time, timestamp: new Date().toISOString() };
    const updatedBookings = [...bookedSlots, newBooking];
    setBookedSlots(updatedBookings);
    localStorage.setItem('chefBookings', JSON.stringify(updatedBookings));
  };

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

    // Real-time validation for date-time combination
    if (name === 'date' || name === 'time') {
      const dateToCheck = name === 'date' ? value : formData.date;
      const timeToCheck = name === 'time' ? value : formData.time;
      
      if (dateToCheck && timeToCheck && isSlotBooked(dateToCheck, timeToCheck)) {
        setErrors(prev => ({
          ...prev,
          dateTime: "This date and time slot is already booked. Please select a different time."
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          dateTime: null
        }));
      }
    }
  };

  const handleMealChange = (type, value) => {
    setFormData({
      ...formData,
      [type]: Math.max(value, 0)
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(formData.date);

    // Date validation
    if (!formData.date) {
      newErrors.date = "Date is required";
    } else if (selectedDate < today) {
      newErrors.date = "Date cannot be in the past";
    }

    // Time validation
    if (!formData.time) {
      newErrors.time = "Time is required";
    }

    // Check if the selected date is today and time is in the past
    if (formData.date && formData.time) {
      const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
      const now = new Date();
      
      if (formData.date === getTodayDate() && selectedDateTime < now) {
        newErrors.time = "Time cannot be in the past for today's date";
      }
      
      // Check if slot is already booked
      if (isSlotBooked(formData.date, formData.time)) {
        newErrors.dateTime = "This date and time slot is already booked. Please select a different time.";
      }
    }

    // People validation
    if (!formData.people) {
      newErrors.people = "Number of people is required";
    } else if (formData.people <= 0) {
      newErrors.people = "Number of people must be greater than 0";
    }

    // Meals validation
    const totalMeals = formData.starters + formData.mainCourse + formData.desserts + formData.sides;
    if (totalMeals === 0) {
      newErrors.meals = "Please select at least one meal";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (validateForm()) {
      // Save the booking
      saveBooking(formData.date, formData.time);
      
      // Process the form submission
      console.log("Form submitted:", formData);
      alert("Booking confirmed! Your chef has been scheduled.");
      
      // Reset form
      setFormData({
        date: "",
        time: "",
        people: "",
        starters: 0,
        mainCourse: 0,
        desserts: 0,
        sides: 0
      });
      setSubmitted(false);
      setErrors({});
    }
  };

  // Handle social media clicks
  const handleSocialMediaClick = (platform) => {
    const urls = {
      instagram: "https://www.instagram.com/duzo_official",
      facebook: "https://www.facebook.com/duzo.official",
      twitter: "https://www.twitter.com/duzo_official"
    };
    
    window.open(urls[platform], '_blank', 'noopener,noreferrer');
  };

  // Handle phone click
  const handlePhoneClick = () => {
    window.location.href = "tel:+919876543210";
  };

  // Handle email click
  const handleEmailClick = () => {
    window.location.href = "mailto:customercare@duzo.in";
  };

  return (
    <div className="mx-1 px-1">
      {/* Main Content */}
      {showMainContent && (
        <>
          {/* Navbar */}
          <Navbar
            style={{ backgroundColor: "#FFD29E" }}
            expand="lg"
            className="rounded-4 mt-2 mb-2"
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

          {/* Main Section */}
          <Container fluid className="p-3 p-md-4 rounded-4 mt-2 mb-2 text-center shadow" style={{ backgroundColor: "#ffbc7f" }}>
            <h2 className="fw-bold">Chef For Party</h2>
            <p className="text-end fw-bold">Menu</p>

            <Form onSubmit={handleSubmit} className="w-100">
              <Row className="w-100 mx-0">
                {/* Left Column - Form Fields and Meal Counter */}
                <Col xs={12} md={6} className="d-flex flex-column gap-3 text-start">
                  {/* Date-Time Conflict Alert */}
                  {errors.dateTime && (
                    <Alert variant="danger" className="mb-3">
                      {errors.dateTime}
                    </Alert>
                  )}

                  {/* Date Selection */}
                  <div className="d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-3">
                    <Form.Label className="fw-bold w-100 w-md-50">Select your Date</Form.Label>
                    <div className="w-100 w-md-50">
                      <Form.Control
                        type="date"
                        name="date"
                        min={getTodayDate()}
                        isInvalid={submitted && errors.date}
                        value={formData.date}
                        onChange={handleInputChange}
                        style={{ borderRadius: '20px', padding: '0.35rem 0.715rem' }}
                      />
                      <Form.Control.Feedback type="invalid">{errors.date}</Form.Control.Feedback>
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div className="d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-3">
                    <Form.Label className="fw-bold w-100 w-md-50">Party Start Time</Form.Label>
                    <div className="w-100 w-md-50">
                      <div style={{ width: "80%" }}>
                        <Form.Control
                          type="time"
                          name="time"
                          isInvalid={submitted && (errors.time || errors.dateTime)}
                          value={formData.time}
                          onChange={handleInputChange}
                          className="rounded-pill"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.time || errors.dateTime}
                        </Form.Control.Feedback>
                      </div>
                    </div>
                  </div>

                  <p className="small text-muted fw-bold">*Our Chef arrives at least 3 hours before start time</p>

                  {/* Number of People */}
                  <div className="d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-3 mb-3">
                    <Form.Label className="fw-bold w-100 w-md-50">Number of People</Form.Label>
                    <div className="w-100 w-md-50 d-flex">
                      <div className="position-relative" style={{ width: "100px" }}>
                        <Form.Control
                          type="number"
                          name="people"
                          isInvalid={submitted && errors.people}
                          value={formData.people}
                          onChange={handleInputChange}
                          min="1"
                          className="rounded-pill px-3"
                          style={{
                            height: "45px"
                          }}
                        />
                        <Form.Control.Feedback type="invalid">{errors.people}</Form.Control.Feedback>
                      </div>
                    </div>
                  </div>

                  {/* Meals Counter Section */}
                  <div className="mt-2">
                    <h4 className="fw-bold mb-3">Choose Number of Meals</h4>
                    {submitted && errors.meals && (
                      <Alert variant="danger">{errors.meals}</Alert>
                    )}
                    
                    <div className="d-flex flex-column align-items-start gap-3">
                      {/* Starters */}
                      <div className="d-flex flex-column flex-sm-row align-items-sm-center">
                        <Form.Label className="fw-bold me-3 mb-1 mb-sm-0" style={{minWidth: "180px", width: "180px"}}>Number of Starters:</Form.Label>
                        <div style={{marginLeft: "0"}}>
                          <InputGroup style={{width: "100px"}}>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              style={{
                                borderRadius: "20px 0 0 20px", 
                                padding: '0 0.5rem',
                                borderRight: 'none',
                                background: 'white',
                                color: 'black',
                                height: "35px",
                                border: "1px solid #ced4da"
                              }}
                              onClick={() => handleMealChange("starters", formData.starters - 1)}
                            >
                              -
                            </Button>
                            <Form.Control 
                              className="text-center" 
                              value={formData.starters} 
                              readOnly 
                              style={{
                                fontSize: "0.9rem", 
                                borderRadius: '0', 
                                borderLeft: 'none', 
                                borderRight: 'none',
                                height: "35px"
                              }} 
                            />
                                                        <Button
                              variant="outline-secondary"
                              size="sm"
                              style={{
                                borderRadius: "0 20px 20px 0", 
                                padding: '0 0.5rem',
                                borderLeft: 'none',
                                background: 'white',
                                color: 'black',
                                height: "35px",
                                border: "1px solid #ced4da"
                              }}
                              onClick={() => handleMealChange("starters", formData.starters + 1)}
                            >
                              +
                            </Button>
                          </InputGroup>
                        </div>
                      </div>
                      
                      {/* Main Course */}
                      <div className="d-flex flex-column flex-sm-row align-items-sm-center">
                        <Form.Label className="fw-bold me-3 mb-1 mb-sm-0" style={{minWidth: "180px", width: "180px"}}>Number of Main Course:</Form.Label>
                        <div style={{marginLeft: "0"}}>
                          <InputGroup style={{width: "100px"}}>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              style={{
                                borderRadius: "20px 0 0 20px", 
                                padding: '0 0.5rem',
                                borderRight: 'none',
                                background: 'white',
                                color: 'black',
                                height: "35px",
                                border: "1px solid #ced4da"
                              }}
                              onClick={() => handleMealChange("mainCourse", formData.mainCourse - 1)}
                            >
                              -
                            </Button>
                            <Form.Control 
                              className="text-center" 
                              value={formData.mainCourse} 
                              readOnly 
                              style={{
                                fontSize: "0.9rem", 
                                borderRadius: '0', 
                                borderLeft: 'none', 
                                borderRight: 'none',
                                height: "35px"
                              }} 
                            />
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              style={{
                                borderRadius: "0 20px 20px 0", 
                                padding: '0 0.5rem',
                                borderLeft: 'none',
                                background: 'white',
                                color: 'black',
                                height: "35px",
                                border: "1px solid #ced4da"
                              }}
                              onClick={() => handleMealChange("mainCourse", formData.mainCourse + 1)}
                            >
                              +
                            </Button>
                          </InputGroup>
                        </div>
                      </div>
                      
                      {/* Desserts */}
                      <div className="d-flex flex-column flex-sm-row align-items-sm-center">
                        <Form.Label className="fw-bold me-3 mb-1 mb-sm-0" style={{minWidth: "180px", width: "180px"}}>Number of Dessert:</Form.Label>
                        <div style={{marginLeft: "0"}}>
                          <InputGroup style={{width: "100px"}}>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              style={{
                                borderRadius: "20px 0 0 20px", 
                                padding: '0 0.5rem',
                                borderRight: 'none',
                                background: 'white',
                                color: 'black',
                                height: "35px",
                                border: "1px solid #ced4da"
                              }}
                              onClick={() => handleMealChange("desserts", formData.desserts - 1)}
                            >
                              -
                            </Button>
                            <Form.Control 
                              className="text-center" 
                              value={formData.desserts}
                              readOnly
                              style={{
                                fontSize: "0.9rem", 
                                borderRadius: '0', 
                                borderLeft: 'none', 
                                borderRight: 'none',
                                height: "35px"
                              }} 
                            />
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              style={{
                                borderRadius: "0 20px 20px 0", 
                                padding: '0 0.5rem',
                                borderLeft: 'none',
                                background: 'white',
                                color: 'black',
                                height: "35px",
                                border: "1px solid #ced4da"
                              }}
                              onClick={() => handleMealChange("desserts", formData.desserts + 1)}
                            >
                              +
                            </Button>
                          </InputGroup>
                        </div>
                      </div>
                      
                      {/* Sides */}
                      <div className="d-flex flex-column flex-sm-row align-items-sm-center">
                        <Form.Label className="fw-bold me-3 mb-1 mb-sm-0" style={{minWidth: "180px", width: "180px"}}>Number of Sides:</Form.Label>
                        <div style={{marginLeft: "0"}}>
                          <InputGroup style={{width: "100px"}}>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              style={{
                                borderRadius: "20px 0 0 20px", 
                                padding: '0 0.5rem',
                                borderRight: 'none',
                                background: 'white',
                                color: 'black',
                                height: "35px",
                                border: "1px solid #ced4da"
                              }}
                              onClick={() => handleMealChange("sides", formData.sides - 1)}
                            >
                              -
                            </Button>
                            <Form.Control 
                              className="text-center" 
                              value={formData.sides} 
                              readOnly 
                              style={{
                                fontSize: "0.9rem", 
                                borderRadius: '0', 
                                borderLeft: 'none', 
                                borderRight: 'none',
                                height: "35px"
                              }} 
                            />
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              style={{
                                borderRadius: "0 20px 20px 0", 
                                padding: '0 0.5rem',
                                borderLeft: 'none',
                                background: 'white',
                                color: 'black',
                                height: "35px",
                                border: "1px solid #ced4da"
                              }}
                              onClick={() => handleMealChange("sides", formData.sides + 1)}
                            >
                              +
                            </Button>
                          </InputGroup>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                
                {/* Right Column - Image (visible only on desktop) */}
                <Col xs={12} md={6} className="mt-4 mt-md-0 d-none d-md-block">
                  <Image src="/chef.png" alt="Chefs" fluid />
                </Col>
              </Row>
              
             {/* Mobile image section - now hidden */}
<div className="d-none">
  <Image src="/chef-.png" alt="Cook" fluid />
</div>

              <div className="text-center mt-4">
                <Button 
                  type="submit" 
                  variant="dark" 
                  className="px-4"
                  disabled={errors.dateTime} // Disable button if there's a date-time conflict
                >
                  Continue
                </Button>
              </div>
            </Form>
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
                
                {/* Clickable Phone Number */}
                <p 
                  className="d-flex align-items-center justify-content-center"
                  style={{ cursor: 'pointer' }}
                  onClick={handlePhoneClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="me-2"
                  >
                    <path d="M3 1a2 2 0 0 0-2 2c0 7.18 5.82 13 13 13a2 2 0 0 0 2-2v-2.35a1 1 0 0 0-1.02-1 8.92 8.92 0 0 1-3.62-.71 1 1 0 0 0-1.09.26l-1.43 1.43a11.27 11.27 0 0 1-4.52-4.52l1.43-1.43a1 1 0 0 0 .26-1.09 8.92 8.92 0 0 1-.71-3.62A1 1 0 0 0 3 1z" />
                  </svg>
                  <span 
                    className="text-decoration-underline"
                    style={{ color: '#0066cc' }}
                  >
                    +91 86187 05796
                  </span>
                </p>

                {/* Clickable Email */}
                <p 
                  className="d-flex align-items-center justify-content-center"
                  style={{ cursor: 'pointer' }}
                  onClick={handleEmailClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="me-2"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
                  </svg>
                  <span 
                    className="text-decoration-underline"
                    style={{ color: '#0066cc' }}
                  >
                    customercare@duzo.in
                  </span>
                </p>

                {/* Clickable Social Media Icons */}
                <div className="d-flex justify-content-center gap-3">
                <div 
                style={{ cursor: 'pointer' }}
                onClick={() => window.open('https://www.instagram.com/duzo.in/', '_blank', 'noopener,noreferrer')}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                >
               <FaInstagram 
               size={24} 
               color="#E4405F" 
               style={{ transition: 'transform 0.2s ease' }}
               />
               </div>
                  <div 
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleSocialMediaClick('facebook')}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    <FaFacebook 
                      size={24} 
                      color="#1877F2" 
                      style={{ transition: 'transform 0.2s ease' }}
                    />
                  </div>
                  <div 
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleSocialMediaClick('twitter')}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
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
        </>
      )}
    </div>
  );
};

export default ChefForParty;
