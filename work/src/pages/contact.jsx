import React from 'react';
import styles from './css/contact.module.css';

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>DUZO</div>
        <div className={styles.search}>
          <input type="text" placeholder="How can we help you with?" />
          <button className={styles.searchButton}>🔍</button>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>Homes</li>
            <li>Beauty</li>
            <li>Automobile</li>
            <li>Buy / Rent</li>
          </ul>
        </nav>
        <div className={styles.icons}>
          <span className={styles.icon}>📍</span>
          <span className={styles.icon}>🛒</span>
          <span className={styles.icon}>🌐</span>
        </div>
      </header>
      <main className={styles.main}>
        <h2>How Can We Help You?</h2>
        <textarea placeholder="Describe your issue here" className={styles.textarea} />
        <div className={styles.formGroup}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Contact Number" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
        </div>
        <button className={styles.submitButton}>Submit</button>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerLogo}>DUZO</div>
        <div className={styles.footerLinks}>
          <p>Services Available At Bengaluru</p>
          <button className={styles.bookNowButton}>BOOK NOW</button>
        </div>
        <div className={styles.contactInfo}>
          <p>Phone number</p>
          <p>E-mail address</p>
          <div className={styles.socialIcons}>
            <span className={styles.icon}>📷</span>
            <span className={styles.icon}>📘</span>
            <span className={styles.icon}>❌</span>
          </div>
        </div>
        <nav className={styles.footerNav}>
          <ul>
            <li>Site Map</li>
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