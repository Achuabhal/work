import React from 'react';
import styles from './css/contact.module.css';
// import styes from './css/about.module.css';

// Import the CSS Module styles
import { FaInstagram, FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaBell, FaShoppingCart, FaUser } from "react-icons/fa";

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
       
                <div className={styles.footerContent}>
                  <div className={styles.footerLogoo}>
                    <div className={styles.footerLogo}>
                    <img src="/duzo.png" alt="DUZO" className={styles.footerLogo} />
                    </div>
                    <div className={styles.footerInfo}>
                      <p><FaPhone /> Phone number</p>
                      <p><FaEnvelope /> E-mail address</p>
                      <div className={styles.socialLinks}>
                        <a href="#" className={styles.socialIcon}><FaInstagram /></a>
                        <a href="#" className={styles.socialIcon}><FaFacebook /></a>
                        <a href="#" className={styles.socialIcon}><FaTwitter /></a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.footerLocation}>
                    <h3>Services Available At</h3>
                    <h3>Bengaluru</h3>
                    <button className={styles.bookNow}>BOOK NOW</button>
                  </div>
                  <div className={styles.footerLinks}>
                    <h3>Site Map</h3>
                    <ul>
                      <li><a href="#"></a>Services</li>
                      <li><a href="#"></a>Hiring</li>
                      <li><a href="#"></a>About Us</li>
                      <li><a href="#"></a>Contact Us</li>
                    </ul>
                  </div>
                </div>
              </footer>
        <div className={styles.footerBottom}>
                <p>© 2024 - DUZO</p>
              </div>
      
    </div>
  );
};

export default ContactForm;
