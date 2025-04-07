import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup, Alert, Image, Navbar } from "react-bootstrap";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaSearch
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const CookForOneMeal = () => {
  const [formData, setFormData] = useState({
    date: "",
    people: "",
    mealType: "", // Breakfast, Lunch, Dinner
    timeSlot: "", // 7:00 AM, etc.
    starters: 0,
    mainCourse: 0,
    desserts: 0,
    sides: 0
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Available time slots based on meal type
  const timeSlots = {
    Breakfast: ["7:00 AM", "8:00 AM", "9:00 AM"],
    Lunch: ["12:00 PM", "1:00 PM", "2:00 PM"],
    Dinner: ["7:00 PM", "8:00 PM", "9:00 PM"]
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
    
    // Reset time slot when meal type changes
    if (name === "mealType") {
      setFormData(prev => ({
        ...prev,
        timeSlot: ""
      }));
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

    if (!formData.date) {
      newErrors.date = "Date is required";
    } else if (selectedDate < today) {
      newErrors.date = "Date cannot be in the past";
    }

    if (!formData.people) {
      newErrors.people = "Number of people is required";
    } else if (formData.people <= 0) {
      newErrors.people = "Number of people must be greater than 0";
    }

    if (!formData.mealType) {
      newErrors.mealType = "Please select a meal type";
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = "Please select a time slot";
    }

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
      // Process the form submission
      console.log("Form submitted:", formData);
      // Add your submission logic here
    }
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

      {/* Main Section */}
      <Container fluid className="p-3 p-md-4 rounded-4 mt-3 mb-4 text-center shadow" style={{ backgroundColor: "#ffbc7f" }}>
        <h2 className="fw-bold">Cook For One Meal</h2>
        <p className="text-end fw-bold">Menu</p>

        <Form onSubmit={handleSubmit} className="w-100">
          <Row className="w-100 mx-0">
            {/* Left Column - Form Fields */}
            <Col xs={12} md={6} className="d-flex flex-column gap-3 text-start">
              {/* Date Selection */}
              <div className="d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-3">
                <Form.Label className="fw-bold w-100 w-md-50">Select your Date</Form.Label>
                <div className="w-100 w-md-50">
                  <Form.Control
                    type="date"
                    name="date"
                    isInvalid={submitted && errors.date}
                    value={formData.date}
                    onChange={handleInputChange}
                    style={{ borderRadius: '20px', padding: '0.35rem 0.715rem' }}
                  />
                  <Form.Control.Feedback type="invalid">{errors.date}</Form.Control.Feedback>
                </div>
              </div>

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

{/* Choose your meal - Circular Radio Buttons with Bootstrap */}
<div className="mt-2">
  <h4 className="fw-bold mb-3">Choose your Meal</h4>
  {submitted && errors.mealType && (
    <Alert variant="danger">{errors.mealType}</Alert>
  )}
  
  <div className="d-flex flex-wrap gap-4 mb-4 justify-content-center">
    {["Breakfast", "Lunch", "Dinner"].map((meal) => (
      <div key={meal} className="text-center">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="mealType"
            id={`meal-${meal}`}
            value={meal}
            checked={formData.mealType === meal}
            onChange={handleInputChange}
            style={{
              cursor: 'pointer',
              width: '1.1em',
              height: '1.1em'
            }}
          />
          <label
            className="form-check-label ms-2 fw-medium"
            htmlFor={`meal-${meal}`}
            style={{ cursor: 'pointer' }}
          >
            {meal}
          </label>
        </div>
      </div>
    ))}
  </div>
</div>

{/* Choose your Slot - Always Visible with All Timings */}
<div className="mt-2">
  <h4 className="fw-bold mb-3">Choose your Slot</h4>
  {submitted && errors.timeSlot && (
    <Alert variant="danger">{errors.timeSlot}</Alert>
  )}
  
  <div className="d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-3">
    <Form.Label className="fw-bold w-100 w-md-50">Select Time Slot</Form.Label>
    <div className="w-100 w-md-50">
      <Form.Select
        name="timeSlot"
        value={formData.timeSlot}
        onChange={handleInputChange}
        isInvalid={submitted && errors.timeSlot}
        style={{ 
          borderRadius: '20px', 
          padding: '0.35rem 0.715rem',
          backgroundColor: formData.timeSlot ? "white" : "white",
          border: "1px solid #FFBE5D"
        }}
      >
        <option value="">Select a time slot</option>
        
        {/* Breakfast Time Slots */}
        <optgroup label="Breakfast">
          {timeSlots.Breakfast.map((time) => (
            <option 
              key={time} 
              value={time}
              disabled={formData.mealType && formData.mealType !== "Breakfast"}
            >
              {time}
            </option>
          ))}
        </optgroup>
        
        {/* Lunch Time Slots */}
        <optgroup label="Lunch">
          {timeSlots.Lunch.map((time) => (
            <option 
              key={time} 
              value={time}
              disabled={formData.mealType && formData.mealType !== "Lunch"}
            >
              {time}
            </option>
          ))}
        </optgroup>
        
        {/* Dinner Time Slots */}
        <optgroup label="Dinner">
          {timeSlots.Dinner.map((time) => (
            <option 
              key={time} 
              value={time}
              disabled={formData.mealType && formData.mealType !== "Dinner"}
            >
              {time}
            </option>
          ))}
        </optgroup>
      </Form.Select>
      <Form.Control.Feedback type="invalid">{errors.timeSlot}</Form.Control.Feedback>
      {/* {formData.mealType ? (
        <small className="text-muted">Showing available times for {formData.mealType}</small>
      ) : (
        <small className="text-muted">Please select a meal type to enable relevant time slots</small>
      )} */}
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
              <Image src="/chef.png" alt="Cook" fluid />
            </Col>
          </Row>
          
          {/* Mobile image section - now hidden */}
<div className="d-none">
  <Image src="/chef-.png" alt="Cook" fluid />
</div>


          <div className="text-center mt-4">
            <Button type="submit" variant="dark" className="px-4">Continue</Button>
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

export default CookForOneMeal;
