import React from 'react'
import styles from "./css/Oops1.module.css";

function App() {
  return (
    <div className="container">
      <h1 className="main-title">Need Appliances...Buy or Rent with Ease</h1>
      
      <div className="options-grid">
        <div className="option-card">
          <button className="action-button">Buy Appliances</button>
        </div>
        <div className="option-card">
          <button className="action-button">Rent Appliances</button>
        </div>
      </div>

      <div className="sell-section">
        <h2>Sell your old Appliances and Earn</h2>
        {/* Content for sell section */}
      </div>

      <div className="testimonials">
        <h2>Happy Customers</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <blockquote>
              {/* Testimonial content */}
            </blockquote>
          </div>
          <div className="testimonial-card">
            <blockquote>
              {/* Testimonial content */}
            </blockquote>
          </div>
        </div>
      </div>

      <div className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon"></div>
            <p>Verified Appliances</p>
          </div>
          <div className="feature">
            <div className="feature-icon"></div>
            <p>Affordable Pricing</p>
          </div>
          <div className="feature">
            <div className="feature-icon"></div>
            <p>Quick Response Time</p>
          </div>
          <div className="feature">
            <div className="feature-icon"></div>
            <p>24/7 Customer Support</p>
          </div>
          <div className="feature">
            <div className="feature-icon"></div>
            <p>Satisfaction Guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App