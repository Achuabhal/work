import React, { useState, useEffect } from "react";
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
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import { Link } from "react-router-dom";

const ChefForMonth = () => {
  const [formData, setFormData] = useState({
    date: "",
    people: "",
    mealType: "", // Breakfast, Lunch, Dinner
    starters: 0,
    mainCourse: 0,
    desserts: 0,
    sides: 0
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);

  // Load booked slots from localStorage on component mount
  useEffect(() => {
    const savedBookings = localStorage.getItem('cookMonthBookings');
    if (savedBookings) {
      setBookedSlots(JSON.parse(savedBookings));
    }
  }, []);

  // Get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get current time in HH:MM format
  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
  };

  // Check if a date is already booked
  const isDateBooked = (date) => {
    return bookedSlots.some(slot => slot.date === date);
  };

  // Save booking to localStorage
  const saveBooking = (date) => {
    const newBooking = { date, timestamp: new Date().toISOString() };
    const updatedBookings = [...bookedSlots, newBooking];
    setBookedSlots(updatedBookings);
    localStorage.setItem('cookMonthBookings', JSON.stringify(updatedBookings));
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

    // Real-time validation for date
    if (name === 'date') {
      if (value && isDateBooked(value)) {
        setErrors(prev => ({
          ...prev,
          dateBooked: "This date is already booked for monthly service. Please select a different date."
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          dateBooked: null
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

    // Check if date is already booked
    if (formData.date && isDateBooked(formData.date)) {
      newErrors.dateBooked = "This date is already booked for monthly service. Please select a different date.";
    }

    // People validation
    if (!formData.people) {
      newErrors.people = "Number of people is required";
    } else if (formData.people <= 0) {
      newErrors.people = "Number of people must be greater than 0";
    }

    // Meal type validation
    if (!formData.mealType) {
      newErrors.mealType = "Please select a meal type";
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
      saveBooking(formData.date);
      
      // Process the form submission
      console.log("Form submitted:", formData);
      alert("Booking confirmed! Your cook has been scheduled for the month.");
      
      // Reset form
      setFormData({
        date: "",
        people: "",
        mealType: "",
        starters: 0,
        mainCourse: 0,
        desserts: 0,
        sides: 0
      });
      setSubmitted(false);
      setErrors({});
    }
  };

  return (
    <div className="mx-1 px-1">
      {/* Navbar */}
      <Navbar
        style={{ backgroundColor: "#FFD29E" }}
        expand="lg"
        className="rounded-4 mt-2 mb-2"
      >
        <Container>
          <Navbar.Brand className="mb-5">
            <Link to="/home">
              <img src="/duzo.png" alt="DUZO" width="100" />
            </Link>
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
                  <Link to="/myaccount">
                    <img src="/user.png" width="26" height="26" alt="Profile" />
                  </Link>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Section */}
      <Container fluid className="p-3 p-md-4 rounded-4 mt-2 mb-2 text-center shadow" style={{ backgroundColor: "#ffbc7f" }}>
        <h2 className="fw-bold">Cook For One Month</h2>
        <p className="text-end fw-bold">Menu</p>

        <Form onSubmit={handleSubmit} className="w-100">
          <Row className="w-100 mx-0">
            {/* Left Column - Form Fields */}
            <Col xs={12} md={6} className="d-flex flex-column gap-3 text-start">
              {/* Date Booking Conflict Alert */}
              {errors.dateBooked && (
                <Alert variant="danger" className="mb-3">
                  {errors.dateBooked}
                </Alert>
              )}

              {/* Date Selection */}
              <div className="d-flex flex-column flex-md-row align-items-md-center gap-2 gap-md-3">
                <Form.Label className="fw-bold w-100 w-md-50">Select Start Date</Form.Label>
                <div className="w-100 w-md-50">
                  <Form.Control
                    type="date"
                    name="date"
                    min={getTodayDate()}
                    isInvalid={submitted && (errors.date || errors.dateBooked)}
                    value={formData.date}
                    onChange={handleInputChange}
                    style={{ borderRadius: '20px', padding: '0.35rem 0.715rem' }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.date || errors.dateBooked}
                  </Form.Control.Feedback>
                  
                  {/* Helper text */}
                  <Form.Text className="text-muted small d-block mt-1">
                    Service will start from this date for one month
                  </Form.Text>
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

              {/* Choose your meal - Radio Buttons */}
              <div className="mt-2">
                <h4 className="fw-bold mb-3">Choose your Meal</h4>
                {submitted && errors.mealType && (
                  <Alert variant="danger">{errors.mealType}</Alert>
                )}
                
                <div className="d-flex flex-wrap gap-4 mb-4 justify-content-center">
                  {["Breakfast", "Lunch", "Dinner"].map((meal) => (
                    <div key={meal} className="text-center">
                      <div className="form-check d-flex align-items-center">
                        <input
                          className="form-check-input me-2"
                          type="radio"
                          name="mealType"
                          id={`meal-${meal}`}
                          value={meal}
                          checked={formData.mealType === meal}
                          onChange={handleInputChange}
                          style={{
                            cursor: 'pointer',
                            width: '1.1em',
                            height: '1.1em',
                            borderRadius: '0',
                            marginTop: '0'
                          }}
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor={`meal-${meal}`}
                          style={{ 
                            cursor: 'pointer',
                            marginBottom: '0'
                          }}
                        >
                          {meal}
                        </label>
                      </div>
                    </div>
                  ))} 
                </div>
              </div>
              <h6 className="fw-bold mb-3">(Choose one or more options)</h6>
              
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
            <Button 
              type="submit" 
              variant="dark" 
              className="px-4"
              disabled={errors.dateBooked} // Disable button if there's a date conflict
            >
              Continue
            </Button>
          </div>
        </Form>
      </Container>

      {/* Footer - Same as HomePage */}
      <div className="mt-0 mx-2 pt-0"> 
        <Footer />
        <Copyright />
      </div>
    </div>
  );
};

export default ChefForMonth;
