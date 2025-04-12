
import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../styles/account.css";

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState("personalInfo");
  
  
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

  return (
    <div className="container-fluid p-0 m-0" style={{ fontFamily: "Outfit" }}>
      {/* Header */}
      <header
        className="d-flex justify-content-between align-items-center p-3 w-100 rounded-0 rounded-md-0 rounded-4"
        style={{ backgroundColor: "#FDCC82" }}
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
        <div className="dropdown d-block d-lg-none">
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
          <ul className="dropdown-menu dropdown-menu-end mt-2" aria-labelledby="dropdownMenuButton">
            <li>
              <button
                className="dropdown-item fw-bold text-dark"
                style={{ backgroundColor: "#FFAD62", border: "1px solid black" }}
                onClick={() => setActiveSection("personalInfo")}
              >
                Personal Info
              </button>
            </li>
            <li>
              <button
                className="dropdown-item fw-bold text-dark"
                style={{ backgroundColor: "#FFAD62", border: "1px solid black" }}
                onClick={() => setActiveSection("orders")}
              >
                Your Orders
              </button>
            </li>
            <li>
              <button
                className="dropdown-item fw-bold text-dark"
                style={{ backgroundColor: "#FFAD62", border: "1px solid black" }}
                onClick={() => setActiveSection("paymentMethods")}
              >
                Payment Methods
              </button>
            </li>
            <li>
              <button
                className="dropdown-item fw-bold text-dark"
                style={{ backgroundColor: "#FFAD62", border: "1px solid black" }}
                onClick={() => setActiveSection("customerCare")}
              >
                Customer Care
              </button>
            </li>
          </ul>
        </div>
      </header>

      <div className="d-flex flex-column flex-lg-row mt-4 justify-content-center align-items-start gap-3">
        {/* Sidebar - Hidden on small and medium screens */}
        <div
          className="d-none d-lg-flex flex-column align-items-center justify-content-center p-3 rounded shadow-sm mt-5 me-lg-5 ms-md-0 me-md-0 mx-auto col-lg-3 col-md-6 h-100 align-self-stretch"
          style={{ backgroundColor: "white" }}
        >
          {/* Button Layout */}
          <div className="w-100 d-flex flex-wrap gap-2 justify-content-md-center">
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


        {/* Content Section - Full width on small/medium, adjusted on large */}
        <div className="flex-grow-1 w-100 me-4 w-md-50 w-lg-50">
        {activeSection === "personalInfo" && (
          <div
            className="p-4 rounded-4 shadow-sm mt-md-5 mt-1 mb-5 w-100 w-md-75 w-lg-50"
            style={{ backgroundColor: "#FFD6B0", maxWidth: "800px" }}
          >
            <h3 className="fw-bold text-center mb-5">Personal Information</h3>

            <form onSubmit={(e) => {
              e.preventDefault();
              if (!formErrors.email && !formErrors.phoneNumber) {
                alert("Form submitted successfully!");
              }
            }}>
              <div className="row">
                <div className="col-md-6 col-lg-6 mb-3">
                  <label className="form-label">First Name</label>
                  <div className="col-8">
                    <input 
                      type="text" 
                      className="form-control rounded-pill" 
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 mb-3">
                  <div className="d-flex gap-5 align-items-center">
                    <label className="form-label mb-2">Last Name</label>
                    <a href="#" className="text-primary ms-4 ms-lg-5 ms-md-5">Edit</a>
                  </div>
                  <div className="col-8">
                    <input 
                      type="text" 
                      className="form-control rounded-pill" 
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="d-flex flex-sm-row flex-md-column gap-2 mb-3">
                <label className="form-label mb-0">Gender</label>
                <div className="d-flex gap-3">
                  <div className="form-check mb-0">
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
                  <div className="form-check mb-0">
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

              <div className="col">
                <div className="col-md-6 col-lg-6 mb-3">
                  <div className="d-flex gap-5 align-items-center">
                    <label className="form-label me-md-5">Email Address</label>
                    <a href="#" className="text-primary">Edit</a>
                  </div>
                  <div className="col-8">
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      onChange={(e) => validateEmail(e.target.value)}
                      required
                    />
                  </div>
                  {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
                </div>
                <div className="col-md-6 col-lg-6 mb-3">
                  <div className="d-flex gap-5 align-items-center">
                    <label className="form-label me-md-5 mb-2">Phone Number</label>
                    <a href="#" className="text-primary mb-2">Edit</a>
                  </div>
                  <div className="col-8">
                    <input
                      type="tel"
                      className="form-control rounded-pill"
                      onChange={(e) => validatePhoneNumber(e.target.value)}
                      required
                    />
                  </div>
                  {formErrors.phoneNumber && <p className="text-danger">{formErrors.phoneNumber}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-flex justify-content-center mt-4">
                <button 
                  type="submit"
                  className="btn btn-primary rounded-pill px-4 py-2"
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
            <div
              className="pb-4 pt-4 container-fluid rounded-4 mx-auto mt-md-5 mt-1 mb-5 w-100"
              style={{ backgroundColor: "#FFD6B0", height: "100%", maxWidth: "800px" }}
            >
              <h3 className="fw-bold text-center">Your Orders</h3>

              <div className="container-fluid d-flex align-items-stretch justify-content-center">
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
            <div
              className="p-2 p-md-4 p-lg-3 rounded-4 shadow-sm mx-auto mt-md-5 mt-2 mb-2 w-100"
              style={{ backgroundColor: "#FFD6B0", maxWidth: "800px" }}
            >
              <h3 className="fw-bold text-center mt-3">My Orders</h3>
              <div className="container-fluid d-flex align-items-stretch justify-content-center">
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
              
              <div className="mb-3 mt-5 col-11 col-md-8 ms-1 ms-md-5">
              <div className="d-flex justify-content-center align-items-center">
                <h1 className="mt-4 fw-bold fs-5">Ratings and review</h1>
              </div>

              <textarea 
                        className="form-control rounded-4 col-8 col-md-12" 
                        rows="3" 
                        placeholder="Describe your Experience"
                      ></textarea>
              </div>
              
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary rounded-pill mb-4"
                  style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}

{activeSection === "paymentMethods" && (
  <div
    className="p-2 p-md-4 rounded-4 shadow-sm mx-auto mt-md-5 mt-1 mb-5 w-100"
    style={{ backgroundColor: "#FFD6B0", maxWidth: "800px" }}
  >
    <h3 className="fw-bold mb-4 text-center">Saved Payment Details</h3>

    <div className="mb-4">
      <h5>Saved UPI ID's</h5>
      <div className="mb-3">
        <div className="d-flex flex-row align-items-center mb-3">
          <label className="col-4 col-md-3 col-form-label pe-2">UPI ID 1:</label>
          <div className="col-8 col-md-9">
            <input 
              type="text" 
              className="form-control form-control-sm rounded-pill w-100" 
              style={{ maxWidth: "300px" }}
              name="upiId1" 
              value={paymentDetails.upiId1} 
              onChange={handleInputChange} 
            />
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <label className="col-4 col-md-3 col-form-label pe-2">UPI ID 2:</label>
          <div className="col-8 col-md-9">
            <input 
              type="text" 
              className="form-control form-control-sm rounded-pill w-100" 
              style={{ maxWidth: "300px" }}
              name="upiId2" 
              value={paymentDetails.upiId2} 
              onChange={handleInputChange} 
            />
          </div>
        </div>
      </div>
    </div>

    <h5>Saved Debit Card / Credit Card</h5>
    {paymentDetails.cardDetails.map((card, index) => (
      <div key={index} className="mb-4">
        <div className="d-flex flex-row align-items-center mb-3">
          <label className="col-4 col-md-3 col-form-label pe-0 pe-md-4" htmlFor={`cardDetails.${index}.cardNumber`}>
            Card Number:
          </label>
          <div className="col-8 col-md-9">
            <input 
              type="text" 
              className="form-control form-control-sm rounded-pill w-100" 
              style={{ maxWidth: "300px" }}
              id={`cardDetails.${index}.cardNumber`} 
              name={`cardDetails.${index}.cardNumber`} 
              onChange={handleInputChange} 
            />
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <label className="col-4 col-md-3 col-form-label pe-2" htmlFor={`cardDetails.${index}.expiryDate`}>
            Expiry Date:
          </label>
          <div className="col-8 col-md-9">
            <input 
              type="text" 
              className="form-control form-control-sm rounded-pill w-100" 
              style={{ maxWidth: "200px" }}
              id={`cardDetails.${index}.expiryDate`} 
              name={`cardDetails.${index}.expiryDate`} 
              onChange={handleInputChange} 
            />
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-3">
          <label className="col-4 col-md-3 col-form-label pe-2" htmlFor={`cardDetails.${index}.cvv`}>
            CVV:
          </label>
          <div className="col-8 col-md-9">
            <input
              type="text"
              className="form-control form-control-sm rounded-pill w-100"
              style={{ maxWidth: "150px" }}
              id={`cardDetails.${index}.cvv`}
              name={`cardDetails.${index}.cvv`}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
)}
          {activeSection === "customerCare" && (
            <div
              className="p-4 rounded shadow-sm mx-auto mt-md-5 mt-1 mb-5 w-100"
              style={{ backgroundColor: "#FFD6B0", maxWidth: "800px" }}
            >
              <h3 className="fw-bold text-center">Customer Care</h3>
              <div className="mb-3 row">
  <label className="form-label fw-bold">How can we help you?</label>
  <div className="col-12 col-md-6">
    <textarea className="form-control rounded-3" rows="3" placeholder="Describe your issue"></textarea>
  </div>
</div>

<div className="row">
  <div className="col-12 col-md-6 col-lg-4 me-md-5 mb-3">
    <input type="text" className="form-control rounded-pill" placeholder="Name" />
  </div>
  <div className="col-12 col-md-6 col-lg-5 ms-lg-5 mb-3">
    <input
      type="text"
      className="form-control rounded-pill"
      placeholder="Contact Number"
      onChange={(e) => validatePhoneNumber(e.target.value)}
    />
    {formErrors.phoneNumber && <p className="text-danger">{formErrors.phoneNumber}</p>}
  </div>
</div>

<div className="row mb-3">
  <div className="col-12 col-md-6 col-lg-4">
    <input
      type="email"
      className="form-control rounded-pill"
      placeholder="Email"
      onChange={(e) => validateEmail(e.target.value)}
    />
    {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
  </div>
</div>


              <div className="d-flex justify-content-center mt-4">
                <button className="btn fw-bold rounded-pill w-auto"
                  style={{
                    backgroundColor: "#FF9900A8",
                    borderColor: "#FF9900A8"
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer
        className="p-3 mt-4 rounded d-flex justify-content-between align-items-center w-100 mb-0"
        style={{ backgroundColor: "#FDCC82" }}
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