import React from 'react';
import styles from './css/contact.module.css';

const ContactForm = () => {
  return (
    <div className={styles.container}>
      <header className={styles.headerContainer}>
              <div className={styles.headerContent}>
                <div className={styles.searchBar}>
                  <img src="/duzo.png" alt="DUZO" className={styles.logo} />
                  <div className={styles.searchInputContainer}>
          <input
            type="text"
            placeholder="How can we help you with?"
            className={styles.searchInput}
          />
          <button className={styles.searchBtn}>
            <span className={styles.searchIcon}>🔍</span>
          </button>
        </div>
                  <div className={styles.navIcons}>
                    <div className={styles.iconn}>
                    <img src="/image.png" className={styles.iconn} />
                    </div>
                    <img src="/cart.png" className={styles.icon} />
                    <img src="/user.png" className={styles.icon} />
                  </div>
                </div>
                <nav className={styles.navbar}>
                  <div className={styles.navLinks}>
                    <a href="#" className={styles.navItem}>Homes</a>
                    <a href="#" className={styles.navItem}>Beauty</a>
                    <a href="#" className={styles.navItem}>Automobile</a>
                    <a href="#" className={styles.navItem}>Buy/Rent</a>
                  </div>
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
        
        <div className={styles.contactInfoo}></div>
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
