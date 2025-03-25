import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
    <div className="container-fluid p-0 m-0" style={{ fontFamily: "Outfit, sans-serif", fontWeight: "bold" }}>
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center p-3 w-100" style={{ backgroundColor: "#FF9900A8" }}>
        <img src="/duzo.png" alt="DUZO Logo" className="img-fluid" style={{ height: "50px" }} />
        <h4 className="text-dark fw-bold">MY ACCOUNT</h4>
      </header>

      <div className="d-flex mt-4 flex-wrap justify-content-center">
  {/* Sidebar */}
  <div
  className="d-flex flex-column align-items-center justify-content-center p-3 rounded shadow-sm mt-5 me-lg-5 ms-md-0 me-md-0 mx-auto col-lg-3 col-md-6 h-100 align-self-stretch"
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
    <div className="p-4 rounded shadow-sm mx-auto col-lg-8 col-md-10 mt-5 mb-5 col-12"
      style={{ backgroundColor: "#FFD6B0" }}
    >
      <h3 className="fw-bold text-center mb-4">Personal Information</h3>
      <div className="row "> {/* Added g-4 for gap */}
        <div className="col-md-4 col-lg-4 mb-3  me-md-4 me-lg-5">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control rounded-pill" />
        </div>
        <div className="col-md-4 col-lg-4 mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <label className="form-label mb-0">Last Name</label>
            <a href="#" className="text-primary ms-lg-4 ms-2">Edit</a>
          </div>
          <input type="text" className="form-control rounded-pill" />
        </div>

      </div>


      <label className="form-label">Gender</label>
      <div className="d-flex gap-3 mb-3">
        <div className="form-check">
          <input type="radio" className="form-check-input" name="gender" value="male" /> Male
        </div>
        <div className="form-check">
          <input type="radio" className="form-check-input" name="gender" value="female" /> Female
        </div>
      </div>
      <div className="col">
      <div className="col-md-6 col-lg-5 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <label className="form-label">Email Address</label>
          <a href="#" className="text-primary ">Edit</a> 
        </div>
        <input type="email" className="form-control rounded-pill" />
      </div>
      <div className="col-md-6 col-lg-5 mb-3">
        <div className="d-flex justify-content-between align-items-center">
          <label className="form-label mb-0">Phone Number</label>
          <a href="#" className="text-primary">Edit</a>
        </div>
        <input type="tel" className="form-control rounded-pill" />
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
                  style={{ backgroundColor: "white", borderColor: "white", color: "black" }}>
            Rate and Review
          </button>
        </div>
      </div>
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
                  <input type="text" className="form-control rounded-pill w-75" placeholder="Contact Number" />
                </div>
              </div>

              {/* Email Field */}
              <div className="mb-3 d-flex flex-column align-items-start">
                <input type="email" className="form-control rounded-pill w-50" placeholder="Email" />
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
      <footer className="p-3 mt-4 rounded d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#FF9900A8" }}
      >
        <p className="mb-0">Copyrights &copy; 2024 - DUZO</p>
        <div className="d-flex gap-2">
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
