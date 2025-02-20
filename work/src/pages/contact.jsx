import React from 'react';
import styles from './css/contact.module.css';

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Corrected the <div> tag around the <img> */}
        <img src="/assets/logo.png" alt="DUZO logo" className={styles.logo} />
        <span className={styles.search}>
          <input type="text" placeholder="How can we help you with?" />
          <button className={styles.searchButton}>🔍</button>

          <span className={styles.icon}>📍</span>
          <span className={styles.icon}>🛒</span>
          {/* <span className={styles.icon}>🌐</span> */}
          <span className={styles.icon}>👤</span> {/* This is a profile emoji */}

        </span>

        <div className={styles.menu}>
          <nav className={styles.nav}>
            <ul>
              <li>Homes</li>
              <li>Beauty</li>
              <li>Automobile</li>
              <li>Buy / Rent</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <h2>How Can We Help You?</h2>
        <textarea placeholder="Describe your issue here" className={styles.textarea} />
        <div className={styles.formGroup}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Contact Number" className={styles.input} />
          <br />
          <input type="email" placeholder="Email" className={styles.input} />
        </div>
        <button className={styles.submitButton}>Submit</button>
      </main>

      <footer className={styles.footer}>
        <div className={styles.contactInfo}>
          <p>Phone number</p>
          <p>E-mail address</p>
          <div className={styles.socialIcons}>
            <span className={styles.icon}>📷</span>
            <span className={styles.icon}>📘</span>
            <span className={styles.icon}>❌</span>
          </div>
        </div>
        <br />

        <div className={styles.footerLinks}>
          <p>Services Available At<br />Bengaluru</p>
          <button className={styles.bookNowButton}>BOOK NOW</button>
        </div>

        <nav className={styles.footerNav}>
          <ul>
            <h3>Site Map</h3>
            <li>Services</li>
            <li>Hiring</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default ContactForm;
