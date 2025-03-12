import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/myaccount.module.css"; // Import external CSS file

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState("personalInfo");

  return (
    <div className="container-fluid p-0 m-0" style={{ fontFamily: "Outfit, sans-serif", fontWeight: "bold" }}>
      {/* Header */}
      <header className={`d-flex justify-content-between align-items-center p-3 w-100 ${styles.customHeader}`}>
        <img src="/duzo.png" alt="DUZO Logo" className="img-fluid" style={{ height: "50px" }} />
        <h4 className="text-dark fw-bold">MY ACCOUNT</h4>
      </header>
      <div className={`d-flex mt-4 ${styles.accountContainer}`}>
  {/* Sidebar with increased left margin */}
{/* Sidebar */}
      <div className={`d-flex flex-column align-items-center p-3 rounded shadow-sm ms-lg-4 me-lg-5 ms-2 me-2 ${styles.sidebar}`}>
          <button className={`btn w-100 py-lg-3 py-2 fw-bold mb-2 mb-lg-3 rounded-pill ${styles.customButton}`} onClick={() => setActiveSection("personalInfo")}>
            Personal Info
          </button>
          <button className={`btn w-100 py-lg-3 py-2 fw-bold mb-2 mb-lg-3 rounded-pill ${styles.customButton}`} onClick={() => setActiveSection("orders")}>
            Your Orders
          </button>
          <button className={`btn w-100 py-lg-3 py-2 fw-bold mb-2 mb-lg-3 rounded-pill ${styles.customButton}`} onClick={() => setActiveSection("paymentMethods")}>
            Payment Methods
          </button>
          <button className={`btn w-100 py-lg-3 py-2 fw-bold mb-2 mb-lg-3 rounded-pill ${styles.customButton}`} onClick={() => setActiveSection("customerCare")}>
            Customer Care
          </button>
      </div>

{/* Content Section with decreased left margin */}
    <div className={`flex-grow-1 d-flex justify-content-center ${styles.content}`}>
    {activeSection === "personalInfo" && (
      <div className={`p-4 rounded-4 shadow-sm mt-5 mb-5 w-75 ${styles.formContainer}`}>
        <h3 className="fw-bold text-center">Personal Information</h3>
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control rounded-pill w-75" />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label me-5">Last Name</label>
            <a href="#" className="text-primary">Edit</a>
            <input type="text" className="form-control rounded-pill w-75" />
          </div>
        </div>

        <label className="form-label">Gender</label>
        <div className="d-flex gap-3">
          <div className="form-check">
            <input type="radio" className="form-check-input" name="gender" value="male" /> Male
          </div>
          <div className="form-check">
            <input type="radio" className="form-check-input" name="gender" value="female" /> Female
          </div>
        </div>

        <div className="mt-3">
          <label className="form-label me-5">Email Address</label>
          <a href="#" className="text-primary">Edit</a>
          <input type="email" className={`form-control rounded-pill ${styles.smallInput}`} />
        </div>

        <div className="mt-3">
          <label className="form-label me-5">Phone Number</label>
          <a href="#" className="text-primary">Edit</a>
          <input type="tel" className={`form-control rounded-pill ${styles.smallInput}`} />
        </div>
      </div>
    )}

        {activeSection === "orders" && (
            <div className="bg-light p-4 rounded shadow-sm">
              <h3 className="fw-bold">Your Orders</h3>
              <div className="d-flex align-items-center gap-3 border p-3 rounded">
                <img src="/placeholder.png" alt="Order Thumbnail" className="img-thumbnail" style={{ width: "100px" }} />
                <div>
                  <p className="mb-1"><strong>Order Name</strong></p>
                  <p className="mb-1">Amount Paid</p>
                </div>
                <div>
                  <p className="mb-1">Date</p>
                  <button className={`btn btn-primary btn-sm ${styles.customButton}`}>Rate and Review</button>
                </div>
              </div>
            </div>
          )}

          {activeSection === "customerCare" && (
            <div className="bg-light p-4 rounded shadow-sm">
              <h3 className="fw-bold">Customer Care</h3>
              <label className="form-label">How Can We Help You?</label>
              <textarea className="form-control rounded-pill mb-3" placeholder="Describe your issue here"></textarea>
              <input type="text" className="form-control rounded-pill mb-2" placeholder="Name" />
              <input type="text" className="form-control rounded-pill mb-2" placeholder="Contact Number" />
              <input type="email" className="form-control rounded-pill mb-2" placeholder="Email" />
              <button className={`btn btn-success ${styles.customButton}`}>Submit</button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className={`p-3 mt-4 rounded d-flex justify-content-between align-items-center ${styles.customFooter}`}>
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
