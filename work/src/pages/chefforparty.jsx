
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/logo.png";
import { FaSearch } from "react-icons/fa";


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
  const [showModal, setShowModal] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

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
    
    if (!formData.time) {
      newErrors.time = "Time is required";
    }
    
    if (!formData.people) {
      newErrors.people = "Number of people is required";
    } else if (formData.people <= 0) {
      newErrors.people = "Number of people must be greater than 0";
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
      // Form is valid, show the modal
      setShowModal(true);
    }
  };

  const handleContinue = () => {
    if (termsAccepted) {
      // Close the modal
      setShowModal(false);
      
      // Process the form submission
      console.log("Form submitted:", formData);
      // Add your submission logic here
    }
  };

  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <header className="w-100 d-flex flex-column flex-md-row justify-content-between align-items-center p-3 rounded shadow" style={{ backgroundColor: "#FFD79C" }}>
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <img src={logo} alt="DUZO" height="60" />
        </div>
        <div className="input-group w-100 w-md-50 mb-3 mb-md-0">
          <input type="text" className="form-control rounded-pill bg-warning text-dark px-4" placeholder="How can we help you with?" />
          <button className="btn btn-warning rounded-circle" style={{ marginLeft: "-50px" }}>
            <FaSearch />
          </button>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-warning rounded-pill me-3" style={{ padding: "10px 20px" }}>
            <img src="/image.png" alt="Location" width="20" height="20" className="d-none d-sm-inline" />
            <span className="d-none d-md-inline ms-2">Location</span>
          </button>
          <img src="/cart.png" alt="Cart" width="30" height="30" className="me-3" />
          <img src="/user.png" alt="User" width="30" height="30" />
        </div>
      </header>

      {/* Main Section */}
      <div className="w-100 bg-warning bg-opacity-25 p-4 rounded my-4 text-center shadow">
        <h2 className="fw-bold">Chef For Party</h2>
        <p className="text-end fw-bold">Menu</p>
        
        <form onSubmit={handleSubmit} className="w-100">
          <div className="row w-100 mx-0">
            <div className="col-12 col-md-6 d-flex flex-column gap-3 text-start">
              <div className="d-flex flex-column flex-md-row align-items-md-center gap-3">
                <label className="fw-bold w-100 w-md-50">Select your Date</label>
                <div className="w-100 w-md-50">
                  <input 
                    type="date" 
                    name="date"
                    className={`form-control ${submitted && errors.date ? 'is-invalid' : ''}`} 
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                  {submitted && errors.date && <div className="invalid-feedback">{errors.date}</div>}
                </div>
              </div>
              
              <div className="d-flex flex-column flex-md-row align-items-md-center gap-3">
                <label className="fw-bold w-100 w-md-50">Party Start Time</label>
                <div className="w-100 w-md-50">
                  <input 
                    type="time" 
                    name="time"
                    className={`form-control ${submitted && errors.time ? 'is-invalid' : ''}`} 
                    value={formData.time}
                    onChange={handleInputChange}
                  />
                  {submitted && errors.time && <div className="invalid-feedback">{errors.time}</div>}
                </div>
              </div>
              
              <p className="small text-muted fw-bold">*Our Chef arrives at least 3 hours before start time</p>
              
              <div className="d-flex flex-column flex-md-row align-items-md-center gap-3">
                <label className="fw-bold w-100 w-md-50">Number of People</label>
                <div className="w-100 w-md-50">
                  <input 
                    type="number" 
                    name="people"
                    className={`form-control ${submitted && errors.people ? 'is-invalid' : ''}`} 
                    value={formData.people}
                    onChange={handleInputChange}
                    min="1"
                  />
                  {submitted && errors.people && <div className="invalid-feedback">{errors.people}</div>}
                </div>
              </div>
            </div>
            
            

          {/* Meals Counter - Aligned left, stacked vertically */}
          <div className="mt-4 text-start">
            <h4 className="fw-bold mb-3">Choose Number of Meals</h4>
            {submitted && errors.meals && (
              <div className="alert alert-danger">{errors.meals}</div>
            )}
            
            <div className="d-flex flex-column align-items-start gap-3">
              {/* Starters */}
              <div className="d-flex align-items-center">
                <label className="fw-bold me-3" style={{minWidth: "180px"}}>Number of Starters:</label>
                <div className="input-group" style={{width: "150px"}}>
                  <button 
                    type="button"
                    className="btn btn-outline-dark" 
                    onClick={() => handleMealChange("starters", formData.starters - 1)}
                  >
                    -
                  </button>
                  <span className="form-control text-center">{formData.starters}</span>
                  <button 
                    type="button"
                    className="btn btn-outline-dark" 
                    onClick={() => handleMealChange("starters", formData.starters + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Main Course */}
              <div className="d-flex align-items-center">
                <label className="fw-bold me-3" style={{minWidth: "180px"}}>Number of Main Course:</label>
                <div className="input-group" style={{width: "150px"}}>
                  <button 
                    type="button"
                    className="btn btn-outline-dark" 
                    onClick={() => handleMealChange("mainCourse", formData.mainCourse - 1)}
                  >
                    -
                  </button>
                  <span className="form-control text-center">{formData.mainCourse}</span>
                  <button 
                    type="button"
                    className="btn btn-outline-dark" 
                    onClick={() => handleMealChange("mainCourse", formData.mainCourse + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Desserts */}
              <div className="d-flex align-items-center">
                <label className="fw-bold me-3" style={{minWidth: "180px"}}>Number of Dessert:</label>
                <div className="input-group" style={{width: "150px"}}>
                  <button 
                    type="button"
                    className="btn btn-outline-dark" 
                    onClick={() => handleMealChange("desserts", formData.desserts - 1)}
                  >
                    -
                  </button>
                  <span className="form-control text-center">{formData.desserts}</span>
                  <button 
                    type="button"
                    className="btn btn-outline-dark" 
                    onClick={() => handleMealChange("desserts", formData.desserts + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Sides */}
              <div className="d-flex align-items-center">
                <label className="fw-bold me-3" style={{minWidth: "180px"}}>Number of Sides:</label>
                <div className="input-group" style={{width: "150px"}}>
                  <button 
                    type="button"
                    className="btn btn-outline-dark" 
                    onClick={() => handleMealChange("sides", formData.sides - 1)}
                  >
                    -
                  </button>
                  <span className="form-control text-center">{formData.sides}</span>
                  <button 
                    type="button"
                    className="btn btn-outline-dark" 
                    onClick={() => handleMealChange("sides", formData.sides + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 mt-4 mt-md-0">
              <img src="/chef1.png" alt="Chefs" className="img-fluid" style={{ maxWidth: "100%" }} />
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-dark px-4">Continue</button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="w-100 rounded text-center shadow p-4" style={{ backgroundColor: "#FFD79C", borderRadius: "20px" }}>
        <div className="row w-100 mx-0">
          <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">
            <img src={logo} alt="DUZO" height="50" className="mb-2" />
            <p><i className="bi bi-telephone me-2"></i> Phone number<br /><i className="bi bi-envelope me-2"></i> E-mail address</p>
            <div className="mt-3">
              <a href="#" className="mx-2 text-dark"><i className="bi bi-instagram"></i></a>
              <a href="#" className="mx-2 text-dark"><i className="bi bi-facebook"></i></a>
              <a href="#" className="mx-2 text-dark"><i className="bi bi-twitter"></i></a>
            </div>
          </div>
          
          <div className="col-12 col-md-4 mb-4 mb-md-0">
            <p className="fw-bold">Services Available At Bengaluru</p>
            <button className="btn btn-warning px-4 fw-bold">BOOK NOW</button>
          </div>
          
          <div className="col-12 col-md-4 text-center text-md-end">
            <p className="fw-bold">Site Map</p>
            <a href="#" className="d-block text-primary">Services</a>
            <a href="#" className="d-block text-primary">Hiring</a>
            <a href="#" className="d-block text-primary">About Us</a>
            <a href="#" className="d-block text-primary">Contact Us</a>
          </div>
        </div>
      </footer>

      <div className="w-100 mt-3 p-2 text-center" style={{ backgroundColor: "#C2832D", borderRadius: "10px" }}>
        <small className="fw-bold text-dark">&copy; 2024 - DUZO</small>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop show" style={{ opacity: 0.5 }}></div>
      )}
      
      <div 
        className={`modal fade ${showModal ? 'show d-block' : ''}`} 
        tabIndex="-1" 
        role="dialog"
        style={{ 
          display: showModal ? 'block' : 'none',
        }}
      >
        <div className="modal-dialog modal-dialog-centered" style={{ 
          maxWidth: '800px',
          margin: '1.75rem auto'
        }}>
          <div className="modal-content" style={{ 
            width: '800px',
            height: '559px',
            borderRadius: '51.7px',
            position: 'relative'
          }}>
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold">Services we do not provide</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setShowModal(false)}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-4">
              <ul className="text-start fs-5">
              <li className="mb-3">No utensil cleaning.</li>
                <li className="mb-3">Chef does not bring any ingredients.</li>
              </ul>
              
              <div className="form-check mt-4 text-start">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="termsCheck" 
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                />
                <label className="form-check-label" htmlFor="termsCheck">
                  I have read the above conditions carefully
                </label>
              </div>
            </div>
            <div className="modal-footer border-0 justify-content-center">
              <button 
                type="button" 
                className="btn btn-dark px-5 py-2"
                onClick={handleContinue}
                disabled={!termsAccepted}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefForParty;

