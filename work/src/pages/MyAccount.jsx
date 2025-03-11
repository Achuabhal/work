import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './myaccount.css'; // Custom CSS for additional styling

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState("personalInfo");

  return (
    <div className="container-fluid p-0 m-0">
      <header className="d-flex justify-content-between align-items-center p-3 w-100" 
        style={{ backgroundColor: "#ffa726" }}>
        <img src="/duzo.png" alt="DUZO Logo" className="img-fluid" style={{ height: '80px' }} />
       <h4 className="text-dark fw-bold">MY ACCOUNT</h4>

      </header>
      <div className="row mt-4">
      <div className="col-md-2 ms-5 mt-5"> {/* Reduced width and adjusted margin */}
        <div className="d-grid gap-4">
                  <button className="btn"
            style={{ backgroundColor: "#FFAB5B", borderColor: "#FFAB5B", color: "#000", width: "100%", height: "52px", borderRadius: "25px" }}
            onClick={() => setActiveSection("personalInfo")}
          >
            Personal Information
          </button>
          <button className="btn"
            style={{ backgroundColor: "#FFAB5B", borderColor: "#FFAB5B", color: "#000", width: "100%", height: "52px", borderRadius: "25px" }}
            onClick={() => setActiveSection("orders")}
          >
            Your Orders
          </button>
          <button className="btn"
            style={{ backgroundColor: "#FFAB5B", borderColor: "#FFAB5B", color: "#000", width: "100%", height: "52px", borderRadius: "25px" }}
            onClick={() => setActiveSection("paymentMethods")}
          >
            Saved Payment Methods
          </button>
          <button className="btn"
            style={{ backgroundColor: "#FFAB5B", borderColor: "#FFAB5B", color: "#000", width: "100%", height: "52px", borderRadius: "25px" }}
            onClick={() => setActiveSection("customerCare")}
          >
            Customer Care
          </button>

        </div>
      </div>


    <div className="col-md-9">
      {activeSection === "personalInfo" && (
        <div className="p-4 shadow-sm mx-auto" style={{ backgroundColor: "#ffcc99", width: "70%" }}> {/* Reduced width and centered */}
          <h3 className="fw-bold text-center">Personal Information</h3>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control form-control-sm border-0 rounded-pill" style={{ height: "30px", width: "100%" }} />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Last Name <a href="#" className="text-primary">Edit</a></label>
              <input type="text" className="form-control form-control-sm border-0 rounded-pill" style={{ height: "30px", width: "100%" }} />
            </div>
          </div>
          <div className="mt-3 text-center">
            <label className="form-label">Gender</label>
            <div className="form-check d-inline-block mx-2">
              <input type="radio" className="form-check-input" name="gender" value="male" /> Male
            </div>
            <div className="form-check d-inline-block mx-2">
              <input type="radio" className="form-check-input" name="gender" value="female" /> Female
            </div>
          </div>
          <div className="mt-3 text-center">
            <label className="form-label">Email Address <a href="#" className="text-primary">Edit</a></label>
            <input type="email" className="form-control form-control-sm border-0 rounded-pill mx-auto" style={{ height: "30px", width: "60%" }} />
          </div>
          <div className="mt-3 text-center">
            <label className="form-label">Phone Number <a href="#" className="text-primary">Edit</a></label>
            <input type="tel" className="form-control form-control-sm border-0 rounded-pill mx-auto" style={{ height: "30px", width: "60%" }} />
          </div>
        </div>
      )}
      
          {activeSection === "orders" && (
            <div className="bg-light p-4 rounded shadow-sm">
              <h3 className="fw-bold">Your Orders</h3>
              <div className="d-flex align-items-center gap-3 border p-3 rounded">
                <img src="/placeholder.png" alt="Order Thumbnail" className="img-thumbnail" style={{ width: '100px' }} />
                <div>
                  <p className="mb-1"><strong>Order Name</strong></p>
                  <p className="mb-1">Amount Paid</p>
                </div>
                <div>
                  <p className="mb-1">Date</p>
                  <button className="btn btn-primary btn-sm">Rate and Review</button>
                </div>
              </div>
            </div>
          )}
          {activeSection === "customerCare" && (
            <div className="bg-light p-4 rounded shadow-sm">
              <h3 className="fw-bold">Customer Care</h3>
              <label className="form-label">How Can We Help You?</label>
              <textarea className="form-control mb-3" placeholder="Describe your issue here"></textarea>
              <input type="text" className="form-control mb-2" placeholder="Name" />
              <input type="text" className="form-control mb-2" placeholder="Contact Number" />
              <input type="email" className="form-control mb-2" placeholder="Email" />
              <button className="btn btn-success">Submit</button>
            </div>
          )}
        </div>
      </div>

      <footer className="bg-warning p-3 mt-4 rounded d-flex justify-content-between align-items-center">
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
