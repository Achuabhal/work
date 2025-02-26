
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
                  <label className={styles.radioLabel}><input type="radio" name="gender" value="male" className={styles.gender}/> Male</label>
                  <label className={styles.radioLabel}><input type="radio" name="gender" value="female" className={styles.gender}/> Female</label>
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
            <section className={styles.content}>
            {activeSection === "customerCare" && (
              <div className={styles.customerCare}>
                <h1 className={styles.sectionTitle}>Customer Care</h1>
                <div className={styles.formGroup}>
                  <label>How Can We Help You?</label>
                  <textarea className={styles.inputField} placeholder="Describe your issue here"></textarea>
                </div>
                <div className={styles.formGroup}>
                  <input type="text" className={styles.inputField} placeholder="Name" />
                  <input type="text" className={styles.inputField} placeholder="Contact Number" />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" className={styles.inputField} placeholder="Email" />
                </div>
                <button className={styles.submitButton}>Submit</button>
              </div>
            )}
            </section>
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
