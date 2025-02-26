import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./css/Oops.module.css";
import myImage3 from "./assets/oops1.png";
import myImage2 from "./assets/oops.png";
import myImage1 from "./assets/logo.png";
const Oops = () => {
    return (
        <div className={styles.pageContainer}>
              {/* Header */}
              <header className={styles.pageHeader}>
                <div className={styles.logoContainer}>
                  <img src={myImage1} alt="DUZO Logo" className={styles.logoImage} />
                </div>
              </header>
 
              {/* Main Content */}
              <main className={styles.pageMain}>
                <div className={styles.formContainer}>
                  <img src={myImage2} alt="DUZO Logo" className={styles.formLogo} />
                  <h2 className={styles.headingText}>
                  Sit tight.<br />Our service are reaching you soon!!
                  </h2>
                  </div>
        
                {/* Image Section */}
                <div className={styles.imageSection}>
                  <img src={myImage3} alt="Illustration" className={styles.illustrationImage} />
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
export default Oops;