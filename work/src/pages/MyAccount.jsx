import React, { useState } from "react"; 
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6"; // Importing icons
import styles from "./css/myaccount.module.css";

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState("personalInfo");
  

  return (
    <div className={styles.container}>
        <header className={styles.heading}>
          <div className={styles.logoContainer}>
            <img src="/duzo.png" alt="DUZO Logo" className={styles.duzoLogo} />
          </div>
          <div className={styles.accountTitle}>MY ACCOUNT</div>
        </header>

      <div className={styles.mainPage}>
          <div className={styles.sidebar}>
            <button className={styles.sidebarButton} onClick={() => setActiveSection("personalInfo")}>
              Personal Information
            </button>
            <button className={styles.sidebarButton} onClick={() => setActiveSection("orders")}>
              Your Orders
            </button>
            <button className={styles.sidebarButton} onClick={() => setActiveSection("paymentMethods")}>
              Saved Payment Methods
            </button>
            <button className={styles.sidebarButton} onClick={() => setActiveSection("customerCare")}>
              Customer Care
            </button>
          </div>

          <div className={styles.content}>
            {activeSection === "personalInfo" && (
              <div className={styles.personalInfo}>
                <h1 className={styles.sectionTitle}>Personal Information</h1>
                <div className={styles.formGroupInline}>
                  <div className={styles.formGroup}>
                    <label className={styles.Name}>First Name</label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.Name}>Last Name</label>
                  </div>
                  <a href="#" className={styles.editLink}>Edit</a>
                </div>
                <div className={styles.personalInfotextInp}>
                  <div className={styles.formGroup}>
                    <input type="text" className={styles.nameInputField} />
                  </div>
                  <div className={styles.formGroup}>
                    <input type="text" className={styles.nameInputField} />
                  </div>
                </div>
                <div className={styles.genderContainer}>
                  <label className={styles.genderLabel}>Gender</label>    
                </div>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="gender" value="male" className={styles.gender}/> Male
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="gender" value="female" className={styles.gender}/> Female
                  </label>
                </div>
                <div className={styles.formGroup}>
                  <div className={styles.labelEditContainer}>
                    <label>Email Address</label>
                    <a href="#" className={styles.emailEditLink}>Edit</a>
                  </div>
                  <input type="email" className={styles.inputField} />
                </div>
                <div className={styles.formGroup}>
                  <div className={styles.labelRow}>
                    <label className={styles.label}>Phone Number</label>
                    <a href="#" className={styles.editLink}>Edit</a>
                  </div>
                  <input type="tel" className={styles.inputField} />
                </div>
              </div>
            )}
          </div>
          <div classname={styles.content}>
            {activeSection === "orders" && (
              <div className={styles.ordersSection}>
                <h1 className={styles.sectionTitle}>Your Orders</h1>
                <div className={styles.ordersContainer}>
                  <div className={styles.orderItem}>
                    <div className={styles.orderImage}>
                      <img src="/placeholder.png" alt="Order Thumbnail" />
                    </div>
                    <div className={styles.orderDetails}>
                      <p><strong>Order Name</strong></p>
                      <p>Amount Paid</p>
                    </div>
                    <div className={styles.orderMeta}>
                      <p>Date</p>
                      <button className={styles.rateReviewButton}>Rate and Review</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.content}>
            {activeSection === "paymentMethods" && (
              <div className={styles.paymentMethods}>
                <h1 className={styles.sectionTitle}>Saved Payment Details</h1>
                
                <h2 className={styles.paymentSubTitle}>Saved UPI ID’s</h2>
                <input type="text" className={styles.inputField} value="egegegeg@okicicic"  />
                <input type="text" className={styles.inputField} value="egegegeg@okicicic" />
                
                <h2 className={styles.paymentSubTitle}>Saved Debit Card / Credit Card</h2>
                
                <div className={styles.cardDetails}>
                  <div className={styles.CardFields}>
                  <label>Card Number</label>
                  <input type="password" className={styles.inputField} />
                  </div>

                  <div className={styles.CardFields}>
                  <label>Expiry Date</label>
                  <input type="text" className={styles.inputField} />
                  </div>
                  
                  <div className={styles.CardFields}>
                    <label>CVV</label>
                    <input type="password" className={styles.inputField} />
                  </div>  
                  <div className={styles.CardFields}>
                    <label>Card Number</label>
                    <input type="password" className={styles.inputField}  />
                  </div>
                  <div className={styles.CardFields}>  
                    <label>Expiry Date</label>
                    <input type="text" className={styles.inputField} />
                  </div> 
                  <div className={styles.CardFields}> 
                    <label>CVV</label>
                    <input type="password" className={styles.inputField} />
                  </div>                
                </div>
              </div>
            )}
          </div>
          <div className={styles.customer}>
            {activeSection === "customerCare" && (
              <div className={styles.customerCare}>
                <h1 className={styles.customerTitle}>Customer Care</h1>
                <div className={styles.formGroup}>
                  <label>How Can We Help You?</label>
                  <textarea type="text" className={styles.issueField} placeholder="Describe your issue here"/>
                </div>
                <div className={styles.customerInfo}>
                  <input type="text" className={styles.customerDetails} placeholder="Name" />
                  <input type="text" className={styles.customerDetails} placeholder="Contact Number" />
                  <input type="email" className={styles.customerDetails} placeholder="Email" />
                </div>
                <button className={styles.submitButton}>Submit</button>
              </div>
            )}
          </div>
      </div>

      <footer className={styles.foot}>
        <p className={styles.footerText}>Copyrights &copy; 2024 - DUZO</p>
        <div className={styles.socialIcons}>
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
