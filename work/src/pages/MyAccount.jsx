import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
  <h4 className="text-dark fw-bold d-none d-md-block">MY ACCOUNT</h4>

  {/* Dropdown Menu for small devices */}
  <div className="dropdown d-block d-md-none">
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

      <div className="d-flex mt-4 flex-wrap justify-content-center">
        {/* Sidebar */}
                <div
          className="d-none d-md-flex flex-column align-items-center justify-content-center p-3 rounded shadow-sm mt-5 me-lg-5 ms-md-0 me-md-0 mx-auto col-lg-3 col-md-6 h-100 align-self-stretch"
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

        {/* Content Section */}
        <div className="flex-grow-1 d-flex justify-content-center">
        {activeSection === "personalInfo" && (
  <div
    className="p-4 rounded-4 shadow-sm mx-auto col-lg-8 col-md-10 mt-md-5 mt-1 mb-5 col-12"
    style={{ backgroundColor: "#FFD6B0" }}
  >
    <h3 className="fw-bold text-center mb-5">Personal Information</h3>

    <div className="row">
      <div className="col-md-4 col-lg-4 mb-3 me-md-4 me-lg-5">
        <label className="form-label">First Name</label>
        <div className=" col-10 col-md-11">
          <input type="text" className="form-control rounded-pill" />
        </div>
      </div>
      <div className="col-md-4 col-lg-4 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <label className="form-label mb-0">Last Name</label>
          <a href="#" className="text-primary ms-lg-4 ms-2">Edit</a>
        </div>
        <div className=" col-10 col-md-11">
          <input type="text" className="form-control rounded-pill" />
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
      />
      <label className="form-check-label ms-1" htmlFor="genderFemale">Female</label>
    </div>
  </div>
</div>


    <div className="col">
      <div className="col-md-6 col-lg-5 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <label className="form-label">Email Address</label>
          <a href="#" className="text-primary">Edit</a>
        </div>
        <div className=" col-10 col-md-11">
        <input
          type="email"
          className="form-control rounded-pill"
          onChange={(e) => validateEmail(e.target.value)}
        />
        </div>
        {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
      </div>
      <div className="col-md-6 col-lg-5 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <label className="form-label mb-0">Phone Number</label>
          <a href="#" className="text-primary">Edit</a>
        </div>
        <div className=" col-10 col-md-11">
        <input
          type="tel"
          className="form-control rounded-pill"
          onChange={(e) => validatePhoneNumber(e.target.value)}
        />
        </div>
        {formErrors.phoneNumber && <p className="text-danger">{formErrors.phoneNumber}</p>}
      </div>
    </div>
  </div>
)}

          {activeSection === "orders" && (
            <div
              className="p-2 p-md-4 p-lg-4 rounded shadow-sm mx-auto mt-md-5 mt-2 mb-5 col-xs-12 "
              style={{ backgroundColor: "#FFD6B0" }}
            >
              <h3 className="fw-bold text-center">Your Orders</h3>

              <div className="d-flex justify-content-center">
                <div className="d-flex align-items-center gap-4 border p-3 rounded bg-white col-12">
                  {/* Adjusted the col-12 to make it full width on mobile */}
                  <img src="/placeholder.png" alt="Order Thumbnail"
                       className="img-thumbnail"
                       style={{ width: "100px", backgroundColor: "gray" }} />

                  <div className="text-center">
                    <p className="mb-1"><strong>Order Name</strong></p>
                    <p className="mb-1">Amount Paid</p>
                  </div>

                  <div className="text-center">
                    <p className="mb-1">Date</p>
                    <button className="btn btn-primary btn-sm"
                            style={{ backgroundColor: "white", borderColor: "white", color: "black" }}
                            onClick={() => setActiveSection("ratings")}>
                      Rate and Review
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeSection === "ratings" && (
            <div
              className="p-2 p-md-4 p-lg-3 rounded-4 shadow-sm mx-auto mt-md-5 mt-2 mb-5 col-12 col-md-10 col-lg-8 d-flex flex-column"
              style={{ backgroundColor: "#FFD6B0" }}
            >
              <h3 className="fw-bold text-center mt-3">My Orders</h3>
              <div className="ps-5">
                <p className="mt-4 ms-lg-4 fs-5">Ratings and review</p>
              </div>

              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center gap-2 gap-lg-5 border p-2 rounded-4 bg-white col-8 col-md-10 col-lg-10 ">
                  {/* Image */}
                  <img
                    src="/placeholder.png"
                    alt="Order Thumbnail"
                    className="img-thumbnail col-6 col-md-4 col-lg-3"
                    style={{ backgroundColor: "gray", height: "auto" }}
                  />

                  {/* Order Details - Stacked on Small Screens, Inline on Large */}
                  <div className="d-flex flex-column flex-md-row text-center gap-lg-5 gap-md-5 mt-3 mt-md-0">
                    <div>
                      <p className="mb-1"><strong>Order Name</strong></p>
                      <p className="mb-1">Amount Paid</p>
                    </div>
                    <div>
                      <p className="mb-1">Date</p>
                      <p className="mb-1">Order ID</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Textarea */}
              <div className="mb-3 mt-5 col-8 ms-5">
                <textarea className="form-control rounded-4" rows="3" placeholder="Describe your Experience"></textarea>
              </div>

              {/* Submit Button */}
              <div className="d-flex justify-content-center">
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
                >
                  Submit
                </button>
              </div>
            </div>
          )}


          {activeSection === "paymentMethods" && (
            <div className="p-5 p-xs-1 rounded-4 shadow-sm mt-5 mb-5 col-lg-8 col-md-10 col-12 mx-auto d-flex flex-column"
                 style={{ backgroundColor: "#FFD6B0" }}>
              <h3 className="fw-bold mb-4 text-center">Saved Payment Details</h3>

              <div className="mb-3">
                <h4>Saved UPI ID's</h4>
                <div className="mb-2 d-flex align-items-center">
                  <label className="form-label pe-sm-0 me-2">UPI ID 1:</label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control form-control-sm rounded-pill" name="upiId1" value={paymentDetails.upiId1} onChange={handleInputChange} />
                  </div>
                </div>
                <div className="mb-2 d-flex align-items-center">
                  <label className="form-label pe-sm-0 me-2">UPI ID 2:</label>
                  <div className="col-sm-6">
                    <input type="text" className="form-control form-control-sm rounded-pill" name="upiId2" value={paymentDetails.upiId2} onChange={handleInputChange} />
                  </div>
                </div>
              </div>
              <h4>Saved Debit Card / Credit Card</h4>
              {paymentDetails.cardDetails.map((card, index) => (
                <div key={index} className="mb-3">
                  <div className="mb-2 d-flex align-items-center">
                    <label className="form-label pe-sm-0 me-2" htmlFor={`cardDetails.${index}.cardNumber`}>Card Number:</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control form-control-sm rounded-pill" id={`cardDetails.${index}.cardNumber`} name={`cardDetails.${index}.cardNumber`} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="mb-2 d-flex align-items-center">
                    <label className="form-label pe-sm-0 me-2" htmlFor={`cardDetails.${index}.expiryDate`}>Expiry Date:</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control form-control-sm rounded-pill" id={`cardDetails.${index}.expiryDate`} name={`cardDetails.${index}.expiryDate`} onChange={handleInputChange} />
                    </div>
                  </div>
                  <div className="mb-2 d-flex align-items-center">
                    <label className="form-label pe-sm-0 me-2" htmlFor={`cardDetails.${index}.cvv`}>CVV:</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control form-control-sm rounded-pill" id={`cardDetails.${index}.cvv`} name={`cardDetails.${index}.cvv`} onChange={handleInputChange} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeSection === "customerCare" && (
            <div className="p-4 rounded shadow-sm mx-auto col-lg-8 col-md-10 mt-5 mb-5 col-12"
              style={{ backgroundColor: "#FFD6B0" }}
            >
              <h3 className="fw-bold text-center">Customer Care</h3>

              {/* Issue Description */}
              <div className="mb-3">
                <label className="form-label fw-bold">How can we help you?</label>
                <textarea className="form-control rounded-3 w-75" rows="3" placeholder="Describe your issue"></textarea>
              </div>

              {/* Name and Contact Number in the Same Row */}
              <div className="row">
                <div className="col-md-6 mb-3 d-flex flex-column align-items-start">
                  <input type="text" className="form-control rounded-pill w-75" placeholder="Name" />
                </div>
                <div className="col-md-6 mb-3 d-flex flex-column align-items-start">
                  <input type="text" className="form-control rounded-pill w-75" placeholder="Contact Number" onChange={(e) => validatePhoneNumber(e.target.value)} />
                  {formErrors.phoneNumber && <p className="text-danger">{formErrors.phoneNumber}</p>}
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-3 d-flex flex-column align-items-start">
                <input type="email" className="form-control rounded-pill w-50 " placeholder="Email" onChange={(e) => validateEmail(e.target.value)} />
                {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
              </div>

              {/* Submit Button */}
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
  className="p-3 mt-4 rounded d-flex justify-content-between align-items-center position-fixed w-100 bottom-0"
  style={{ backgroundColor: "#FDCC82" }}
>
  <p className="mb-0">Copyrights &copy; 2024 - DUZO</p>

  {/* Icons hidden on extra-small, visible on small+ */}
  <div className="d-none d-sm-flex gap-2">
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