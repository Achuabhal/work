import React, { useState } from "react";
import styles from "./css/homepage.module.css";

const HomePage1 = () => {
  return (
    <div className="pageContainer">
      <div className="pageHeader">
        <div className="logoContainer">
   
        </div>
        <div className="navContainer">
          <div className="navItems">
            <button className="navButton">Buy Appliances</button>
            <button className="navButton">Rent Appliances</button>
          </div>
        </div>
      </div>

      <div className="pageMain">
        <div className="imageSection">
        
        </div>
        <div className="formContainer">
        
          <h1 className="headingText">Sell your old Appliances and Earn</h1>
        </div>
      </div>

      <div className="pageMain">
        <div className="testimonialsSection">
          <h2 className="headingText">Happy Customers</h2>
          <div className="testimonial">
            <p className="quote">"Great service and fast delivery!"</p>
          </div>
          <div className="testimonial">
            <p className="quote">"I highly recommend this service."</p>
          </div>
        </div>
      </div>

      <div className="pageMain">
        <div className="whyUsSection">
          <h2 className="headingText">Why Choose Us?</h2>
          <div className="features">
            <div className="feature">World-class Appliances</div>
            <div className="feature">Affordable Rates</div>
            <div className="feature">Quick Response Time</div>
            <div className="feature">24/7 Customer Support</div>
            <div className="feature">Self-service portal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage1;