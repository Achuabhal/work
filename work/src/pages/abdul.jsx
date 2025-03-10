import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { LogIn, MapPin, User, Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import styles from "./css/App.module.css"; // Using the existing CSS module
import myImage from "./assets/image1.png";
import myImage1 from "./assets/logo.png";

const CombinedPage = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleDetectMeClick = () => {
    navigate('/oops');
  };

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <header className={styles.pageHeader}>
        <div className={styles.logoContainer}>
          <img src={myImage1} alt="DUZO Logo" className={styles.logoImage} />
        </div>
        <nav className={styles.navContainer}>
          <span className={styles.accountText}>My Account</span>
          <div className={styles.navItems}>
            <span className={styles.loginText}>Login</span>
            <span className={styles.navDivider}>|</span>
            <span className={styles.signupText}>Signup</span>
            <LogIn className={styles.loginIcon} />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.pageMain}>
        <div className={styles.formContainer}>
          <img src={myImage1} alt="DUZO Logo" className={styles.formLogo} />
          <h2 className={styles.headingText}>
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
        <div className={styles.imageSection}>
          <img 
            src={myImage} 
            alt="Illustration" 
            className={styles.illustrationImage}
            loading="lazy" 
          />
        </div>
      </main>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className={styles.pageFooter}
      >
        <div className={styles.footerContent}>
          <div className={styles.copyrightText}>copyrights © 2024 - DUZO</div>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default CombinedPage;