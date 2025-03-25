import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { LogIn, MapPin, User, Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import styles from "./css/App.module.css"; // Keep using the existing CSS module
import myImage from "./assets/image1.png";
import myImage1 from "./assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const CombinedPage = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleDetectMeClick = () => {
    navigate('/oops');
  };

  return (
    <div className={`${styles.pageContainer} min-vh-100 d-flex flex-column`}>
      {/* Header */}
      <header className={`${styles.pageHeader} p-3 d-flex justify-content-between align-items-center`}>
        <div className={`${styles.logoContainer} d-flex align-items-center`}>
          <img src={myImage1} alt="DUZO Logo" className={styles.logoImage} />
        </div>
        <nav className={`${styles.navContainer} d-flex align-items-center`}>
          <span className={styles.accountText}>My Account</span>
          <div className={`${styles.navItems} d-flex align-items-center`}>
            <span className={styles.loginText}>Login</span>
            <span className={styles.navDivider}>|</span>
            <span className={styles.signupText}>Signup</span>
            <LogIn className={styles.loginIcon} />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className={`${styles.pageMain} flex-grow-1 d-flex justify-content-center align-items-center p-4`}>
        <div className={`${styles.formContainer} d-flex flex-column text-center`}>
          <img src={myImage1} alt="DUZO Logo" className={`${styles.formLogo} align-self-center`} />
          <h2 className={`${styles.headingText} fw-bold`}>
            Pinpoint Your Place and Unlock Our Services.<br />
            Let's Get Started!
          </h2>

          <div className={styles.inputGroup}>
            <User className={styles.inputIcon} />
            <input
              type="text"
              placeholder="NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.textInput}
              aria-label="Name"
            />
          </div>

          <div className={styles.inputGroup}>
            <MapPin className={styles.inputIcon} />
            <input
              type="text"
              placeholder="LOCATION"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={styles.textInput}
              aria-label="Location"
            />
            <button 
              className={styles.detectButton}
              onClick={handleDetectMeClick}
              aria-label="Detect location"
            >
              <Search className={styles.searchIcon} />
              <span className={styles.buttonText}>DETECT ME</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className={`${styles.imageSection} d-flex justify-content-center align-items-center`}>
          <img 
            src={myImage} 
            alt="Illustration" 
            className={`${styles.illustrationImage} img-fluid`}
            loading="lazy" 
          />
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-3 ${styles.pageFooter}`}>
        <div className="container">
          <div className={`d-flex justify-content-between align-items-center ${styles.footerContent}`}>
            <div className={styles.copyrightText}>
              copyright © 2024-DUZO
            </div>
            <div className={styles.socialIcons}>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={`me-4 ${styles.socialLink}`}>
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={`me-4 ${styles.socialLink}`}>
                <FaFacebook size={24} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CombinedPage;