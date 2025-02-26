import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { LogIn, MapPin, User, Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import styles from "./css/App.module.css";
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
        <div className={styles.navContainer}>
          <span className={styles.accountText}>My Account</span>
          <div className={styles.navItems}>
            <span className={styles.loginText}>Login</span>
            <span className={styles.navDivider}>|</span>
            <span className={styles.signupText}>Signup</span>
            <LogIn className={styles.loginIcon} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.pageMain}>
        <div className={styles.formContainer}>
          <img src={myImage1} alt="DUZO Logo" className={styles.formLogo} />
          <h2 className={styles.headingText}>
            Pinpoint Your Place and Unlock Our Services.<br />Let's Get Started!
          </h2>

          <div className={styles.inputGroup}>
            <User className={styles.inputIcon} />
            <input
              type="text"
              placeholder="NAME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.textInput}
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
            />
            <button className={styles.detectButton} onClick={handleDetectMeClick}>
              <Search className={styles.searchIcon} />
              DETECT ME
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className={styles.imageSection}>
          <img src={myImage} alt="Illustration" className={styles.illustrationImage} />
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
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaInstagram size={32} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaFacebook size={32} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaTwitter size={32} />
            </a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default CombinedPage;
