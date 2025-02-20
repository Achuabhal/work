
import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6"; // Importing icons
import styles from "./css/myaccount.module.css";

const MyAccount = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="/duzo.png" alt="DUZO Logo" className={styles.duzoLogo} />
        </div>
        <div className={styles.accountTitle}>MY ACCOUNT</div>
      </header>

      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <button className={styles.sidebarButton}>Personal Information</button>
          <button className={styles.sidebarButton}>Your Orders</button>
          <button className={styles.sidebarButton}>Saved Payment Methods</button>
          <button className={styles.sidebarButton}>Customer Care</button>
        </aside>

        <section className={styles.personalInfo}>
          <h1 className={styles.sectionTitle}>Personal Information</h1>
          <div className={styles.formGroupInline}>
            <div className={styles.formGroup}>
              <label>First Name</label>
            </div>
            <div className={styles.formGroup}>
              <label>Last Name</label>
            </div>
            <a href="#" className={styles.editLink}>Edit</a>
          </div>

          <div className={styles.textInp}>
            <div className={styles.formGroup}>
              <input type="text" className={styles.inputField} />
            </div>
            <div className={styles.formGroup}>
              <input type="text" className={styles.inputField} />
            </div>
          </div>
          
          <div className={styles.genderContainer}>
            <label className={styles.genderLabel}>Gender</label>    
            <a href="#" className={styles.genderEdit}>Edit</a>
          </div>
          <div className={styles.radioGroup}>
            <label><input type="radio" name="gender" value="male"/> Male</label>
            <label><input type="radio" name="gender" value="female"/> Female</label>
          </div>

          <div className={styles.formGroup}>
            <label>Email Address</label>
            <div className={styles.inputEdit}>
              <input type="email" className={styles.inputField} />
              <a href="#" className={styles.editLink}>Edit</a>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Phone Number</label>
            <div className={styles.inputEdit}>
              <input type="tel" className={styles.inputField} />
              <a href="#" className={styles.editLink}>Edit</a>
            </div>
          </div>
        </section>
      </div>

      <footer className={styles.footer}>
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
