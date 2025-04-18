import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import "../styles/account.css";

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState("personalInfo");
  const StyledRating = styled(Rating)({
    
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });
  
  // Define state for payment details
  const [paymentDetails, setPaymentDetails] = useState({
    upiId1: "",
    upiId2: "",
    cardDetails: [
      { cardNumber: "", expiryDate: "", cvv: "" },
      { cardNumber: "", expiryDate: "", cvv: "" }
    ],
  });

  // Define state for form errors
  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: ""
  });

  // Handle input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("cardDetails")) {
      const [_, index, field] = name.split(".");
      setPaymentDetails((prev) => {
        const updatedCards = [...prev.cardDetails];
        updatedCards[index][field] = value;
        return { ...prev, cardDetails: updatedCards };
      });
    } else {
      setPaymentDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormErrors((prev) => ({
        ...prev,
        email: "Invalid email format"
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        email: ""
      }));
    }
  };

  // Validate phone number
  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/; // Matches exactly 10 digits
    if (!phoneRegex.test(phoneNumber)) {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: "Invalid phone number format. Please enter exactly 10 digits."
      }));
    } else {
      setFormErrors((prev) => ({
        ...prev,
        phoneNumber: ""
      }));
    }
  };

  // Common container style for all sections with reduced height
  const containerStyle = {
    width: "767px",
    height: "650px",  // Reduced from 729px to 650px
    borderRadius: "30px",
    backgroundColor: "#FFD6B0",
    overflowY: "auto",
    margin: "0 auto",
    padding: "30px"
  };

  return (
    <div className="container-fluid p-0 m-0 d-flex flex-column min-vh-100" style={{ fontFamily: "Outfit" }}>
      {/* Header */}
      <header
  className="d-flex justify-content-between align-items-center p-3 w-100"
  style={{ 
    backgroundColor: "#ffbc57",
    borderRadius: "0"  // Removed curves for box-type appearance
  }}
>
        <img
          src="/duzo.png"
          alt="DUZO Logo"
          className="img-fluid"
          style={{ height: "50px" }}
        />

        {/* MY ACCOUNT for medium and up */}
        <h4 className="text-dark fw-bold d-none d-md-none d-lg-block">MY ACCOUNT</h4>

        {/* Dropdown Menu for small devices */}
        <div className="dropdown d-block d-lg-none position-relative">
          <button
            className="btn rounded-2"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ border: "none", fontSize: "24px" }}
          >
            ☰
          </button>
          <ul 
            className="dropdown-menu mt-2 border-0" 
            aria-labelledby="dropdownMenuButton"
            style={{ 
              width: "475px", 
              height: "150px", 
              top: "158px", 
              left: "46px", 
              borderRadius: "30px",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: "15px",
              backgroundColor: "#FFAD62"
            }}
          >
            <li className="w-50 px-1">
              <button
                className="dropdown-item fw-bold text-dark py-2 h-100"
                style={{ 
                  backgroundColor: "#FFAD62", 
                  border: "1px solid black",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onClick={() => setActiveSection("personalInfo")}
              >
                Personal Info
              </button>
            </li>
            <li className="w-50 px-1">
              <button
                className="dropdown-item fw-bold text-dark py-2 h-100"
                style={{ 
                  backgroundColor: "#FFAD62", 
                  border: "1px solid black",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onClick={() => setActiveSection("orders")}
              >
                Your Orders
              </button>
            </li>
            <li className="w-50 px-1">
              <button
                className="dropdown-item fw-bold text-dark py-2 h-100"
                style={{ 
                  backgroundColor: "#FFAD62", 
                  border: "1px solid black",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onClick={() => setActiveSection("paymentMethods")}
              >
                Payment Methods
              </button>
            </li>
            <li className="w-50 px-1">
              <button
                className="dropdown-item fw-bold text-dark py-2 h-100"
                style={{ 
                  backgroundColor: "#FFAD62", 
                  border: "1px solid black",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onClick={() => setActiveSection("customerCare")}
              >
                Customer Care
              </button>
            </li>
          </ul>
        </div>
      </header>

      <div className="d-flex flex-column flex-lg-row mt-4 justify-content-center align-items-start gap-3 flex-grow-1">
        {/* Sidebar - Hidden on small and medium screens */}
        <div
          className="d-none d-lg-flex flex-column align-items-center justify-content-between p-3 rounded shadow-sm mt-5 me-lg-5 ms-md-0 me-md-0 mx-auto col-lg-3 col-md-6 h-100 align-self-stretch"
          style={{ backgroundColor: "white", minHeight: "70vh" }}
        >
          {/* Button Layout */}
          <div className="w-100 d-flex flex-column gap-5 justify-content-between h-100 py-4">
            <div className="col-lg-12 col-md-12 col-12">
              <button
                className="btn btn-lg w-100 py-4 fs-5 fw-bold rounded-3"
                style={{
                  backgroundColor: "#FFAD62",
                  borderColor: "#FFAD62",
                  color: "black"
                }}
                onClick={() => setActiveSection("personalInfo")}
              >
                Personal Info
              </button>
            </div>

            <div className="col-lg-12 col-md-12 col-12">
              <button
                className="btn btn-lg w-100 py-4 fs-5 fw-bold rounded-3"
                style={{
                  backgroundColor: "#FFAD62",
                  borderColor: "#FFAD62",
                  color: "black",
                }}
                onClick={() => setActiveSection("orders")}
              >
                Your Orders
              </button>
            </div>

            <div className="col-lg-12 col-md-12 col-12">
              <button
                className="btn btn-lg w-100 py-4 fs-5 fw-bold rounded-3"
                style={{
                  backgroundColor: "#FFAD62",
                  borderColor: "#FFAD62",
                  color: "black",
                }}
                onClick={() => setActiveSection("paymentMethods")}
              >
                Payment Methods
              </button>
            </div>

            <div className="col-lg-12 col-md-12 col-12">
              <button
                className="btn btn-lg w-100 py-4 fs-5 fw-bold rounded-3"
                style={{
                  backgroundColor: "#FFAD62",
                  borderColor: "#FFAD62",
                  color: "black",
                }}
                onClick={() => setActiveSection("customerCare")}
              >
                Customer Care
              </button>
            </div>
          </div>
        </div>

        {/* Content Section - Using fixed dimensions */}
        <div className="flex-grow-1 d-flex justify-content-center">
          {activeSection === "personalInfo" && (
            <div style={containerStyle} className="shadow-sm mt-md-5 mt-1 mb-5">
              <h3 className="fw-bold text-center mb-5">Personal Information</h3>

              <form onSubmit={(e) => {
                e.preventDefault();
                if (!formErrors.email && !formErrors.phoneNumber) {
                  alert("Form submitted successfully!");
                }
              }}>
                <div className="row mb-4">
                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-bold">First Name</label>
                    <div className="col-10">
                      <input 
                        type="text" 
                        className="form-control rounded-pill" 
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <label className="form-label fw-bold me-3">Last Name</label>
                      <a href="#" className="text-primary">Edit</a>
                    </div>
                    <div className="col-10">
                      <input 
                        type="text" 
                        className="form-control rounded-pill" 
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-bold mb-2">Gender</label>
                  <div className="d-flex gap-4 ms-3">
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        value="male"
                        id="genderMale"
                        required
                      />
                      <label className="form-check-label ms-1" htmlFor="genderMale">Male</label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        value="female"
                        id="genderFemale"
                        required
                      />
                      <label className="form-check-label ms-1" htmlFor="genderFemale">Female</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <label className="form-label fw-bold me-3">E-mail Address</label>
                      <a href="#" className="text-primary">Edit</a>
                    </div>
                    <div className="col-10">
                      <input
                        type="email"
                        className="form-control rounded-pill"
                        onChange={(e) => validateEmail(e.target.value)}
                        required
                      />
                    </div>
                    {formErrors.email && <p className="text-danger mt-1">{formErrors.email}</p>}
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <label className="form-label fw-bold me-3">Phone Number</label>
                      <a href="#" className="text-primary">Edit</a>
                    </div>
                    <div className="col-10">
                      <input
                        type="tel"
                        className="form-control rounded-pill"
                        onChange={(e) => validatePhoneNumber(e.target.value)}
                        required
                      />
                    </div>
                    {formErrors.phoneNumber && <p className="text-danger mt-1">{formErrors.phoneNumber}</p>}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-content-center mt-5">
                  <button 
                    type="submit"
                    className="btn btn-primary rounded-pill px-5 py-2 fw-bold"
                    style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
                    disabled={formErrors.email || formErrors.phoneNumber}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}  
          
          {activeSection === "orders" && (
            <div style={containerStyle} className="shadow-sm mt-md-5 mt-1 mb-5">
              <h3 className="fw-bold text-center mb-5">Your Orders</h3>

              <div className="container-fluid d-flex align-items-stretch justify-content-center mb-4">
                <div className="container-fluid custom-responsive-bg d-flex flex-row align-items-center justify-content-evenly gap-4 border p-3 rounded w-100">
                  <img
                    src="/placeholder.png"
                    alt="Order Thumbnail"
                    className="img-thumbnail"
                    style={{ width: "100px", backgroundColor: "gray" }}
                  />

                  <div className="d-block text-center ms-lg-4">
                    <div className="d-lg-flex mb-2">
                      <p className="mb-1 me-lg-5">
                        <strong>Order Name</strong>
                      </p>
                                            <p className="mb-1 me-lg-5">
                        <strong>Order Name</strong>
                      </p>
                      <p className="mb-1">Date</p>
                    </div>

                    <div className="d-lg-flex">
                      <p className="mb-1 me-lg-3">Amount paid</p>
                      <button
                        className="btn btn-primary btn-sm responsive-button"
                        onClick={() => setActiveSection("ratings")}
                      >
                        Rate and Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "ratings" && (
            <div style={containerStyle} className="shadow-sm mt-md-5 mt-1 mb-5">
              <h3 className="fw-bold text-center mb-5">My Orders</h3>
              <div className="container-fluid d-flex align-items-stretch justify-content-center mb-4">
                <div className="container-fluid custom-responsive-bg d-flex flex-row align-items-center justify-content-evenly gap-4 border p-3 rounded w-100">
                  <img
                    src="/placeholder.png"
                    alt="Order Thumbnail"
                    className="img-thumbnail"
                    style={{ width: "100px", backgroundColor: "gray" }}
                  />

                  <div className="d-block text-center ms-lg-4">
                    <div className="d-lg-flex mb-2">
                      <p className="mb-1 me-lg-5">
                        <strong>Order Name</strong>
                      </p>
                      <p className="mb-1">Date</p>
                    </div>

                    <div className="d-lg-flex">
                      <p className="mb-1 me-lg-5">Amount paid</p>
                      <p className="mb-1">Order ID</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-4 mt-5 px-4">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <h4 className="fw-bold">Ratings and review</h4>
                </div>

                <textarea 
                  className="form-control rounded-4 w-100" 
                  rows="4" 
                  placeholder="Describe your Experience"
                ></textarea>
              </div>
              
              <Box sx={{ '& > legend': { mt: 2 } }}>
                <div className="text-center"> 
                  <Rating defaultValue={0} className="mb-4" max={5} size="large" />
                </div>
              </Box>
              
              <div className="d-flex justify-content-center mt-4">
                <button
                  className="btn btn-primary rounded-pill px-5 py-2 fw-bold"
                  style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}

          {activeSection === "paymentMethods" && (
            <div style={containerStyle} className="shadow-sm mt-md-5 mt-1 mb-5">
              <h3 className="fw-bold mb-5 text-center">Saved Payment Details</h3>

              <div className="mb-5">
                <h5 className="fw-bold mb-3">Saved UPI ID's</h5>
                <div className="mb-4">
                  <div className="d-flex flex-row align-items-center mb-3">
                    <label className="col-4 col-md-3 col-form-label fw-bold">UPI ID 1:</label>
                    <div className="col-8 col-md-6">
                      <input 
                        type="text" 
                        className="form-control form-control-sm rounded-pill w-100" 
                        name="upiId1" 
                        value={paymentDetails.upiId1} 
                        onChange={handleInputChange} 
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-3">
                    <label className="col-4 col-md-3 col-form-label fw-bold">UPI ID 2:</label>
                    <div className="col-8 col-md-6">
                      <input 
                        type="text" 
                        className="form-control form-control-sm rounded-pill w-100" 
                        name="upiId2" 
                        value={paymentDetails.upiId2} 
                        onChange={handleInputChange} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <h5 className="fw-bold mb-3">Saved Debit Card / Credit Card</h5>
              {paymentDetails.cardDetails.map((card, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex flex-row align-items-center mb-3">
                    <label className="col-4 col-md-3 col-form-label fw-bold" htmlFor={`cardDetails.${index}.cardNumber`}>
                      Card Number:
                    </label>
                    <div className="col-8 col-md-6">
                      <input 
                        type="text" 
                        className="form-control form-control-sm rounded-pill w-100" 
                        id={`cardDetails.${index}.cardNumber`} 
                        name={`cardDetails.${index}.cardNumber`} 
                        onChange={handleInputChange} 
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-3">
                    <label className="col-4 col-md-3 col-form-label fw-bold" htmlFor={`cardDetails.${index}.expiryDate`}>
                      Expiry Date:
                    </label>
                    <div className="col-8 col-md-6">
                      <input 
                        type="text" 
                        className="form-control form-control-sm rounded-pill w-100" 
                        id={`cardDetails.${index}.expiryDate`} 
                        name={`cardDetails.${index}.expiryDate`} 
                        onChange={handleInputChange} 
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-3">
                    <label className="col-4 col-md-3 col-form-label fw-bold" htmlFor={`cardDetails.${index}.cvv`}>
                      CVV:
                    </label>
                    <div className="col-8 col-md-6">
                      <input
                        type="text"
                        className="form-control form-control-sm rounded-pill w-100"
                        id={`cardDetails.${index}.cvv`}
                        name={`cardDetails.${index}.cvv`}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="d-flex justify-content-center mt-5">
                <button 
                  className="btn btn-primary rounded-pill px-5 py-2 fw-bold"
                  style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
                >
                  Save Changes
                </button>
              </div>
            </div>
          )}
          
          {activeSection === "customerCare" && (
            <div style={containerStyle} className="shadow-sm mt-md-5 mt-1 mb-5">
              <h3 className="fw-bold text-center mb-5">Customer Care</h3>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                if (!formErrors.email && !formErrors.phoneNumber) {
                  alert("Form submitted successfully!");
                }
              }}>
                <div className="mb-4">
                  <label className="form-label fw-bold">How can we help you?</label>
                  <div className="col-12">
                    <textarea 
                      className="form-control rounded-4" 
                      rows="4" 
                      placeholder="Describe your issue"
                    ></textarea>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Name</label>
                    <div className="col-10">
                      <input 
                        type="text" 
                        className="form-control rounded-pill" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-3">
                    <label className="form-label fw-bold">Contact Number</label>
                    <div className="col-10">
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        onChange={(e) => validatePhoneNumber(e.target.value)}
                        required
                      />
                      {formErrors.phoneNumber && <p className="text-danger mt-1">{formErrors.phoneNumber}</p>}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Email</label>
                    <div className="col-10">
                      <input
                        type="email"
                        className="form-control rounded-pill"
                        onChange={(e) => validateEmail(e.target.value)}
                        required
                      />
                      {formErrors.email && <p className="text-danger mt-1">{formErrors.email}</p>}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-content-center mt-5">
                  <button 
                    type="submit"
                    className="btn btn-primary rounded-pill px-5 py-2 fw-bold"
                    style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
                    disabled={formErrors.email || formErrors.phoneNumber}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Footer - Now using mt-auto to push it to the bottom */}
      <footer
        className="p-3 mt-auto rounded d-flex justify-content-between align-items-center w-100 mb-0"
        style={{ backgroundColor: "#ffbc57" }}
      >
        <p className="mb-0">Copyrights &copy; 2024 - DUZO</p>

        <div className="d-sm-flex gap-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} color="black" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} color="black" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={30} color="black" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MyAccount;

