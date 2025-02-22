import React, { useState } from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { LogIn, MapPin, User, Search } from "lucide-react";
import styles from "./css/Oops.module.css";
import myImage3 from "./assets/oops1.png";
import myImage2 from "./assets/oops.png";
import myImage1 from "./assets/logo.png";
const Oops = () => {
    return (
        <div className={styles.container}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.logo}><img src={myImage1} alt="DUZO Logo" /></div>
            <div className={styles.nav}>
              <span>My Account</span>
              <div className={styles.navItems}>
                <span>Login</span>
                <span className={styles.divider}>|</span>
                <span>Signup</span>
                <LogIn className="w-5 h-5" />
              </div>
            </div>
          </header>
                {/* Main Content - Location Form */}
                <main className={styles.main}>
                  <div className={styles.content}>
                      <img src={myImage2} alt="DUZO Logo" />
                    <h2 className={styles.heading}>
                      Sit tight.<br />Our service are reaching you soon!!
                    </h2>
          
 
          
         
                  </div>
          
                  {/* ✅ Displaying the imported image correctly */}
                  <div className={styles.imageContainer}>
                    <img
                      src={myImage3}
                      alt="Your Custom Image"
                      className={styles.image}
                    />
                  </div>
                </main>



           {/* Footer */}
                <motion.footer
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className={styles.footer}
                >
                  <div className={styles.footerContent}>
                    <div className={styles.copyright}>copyright © 2024 - DUZO</div>
                    <div className={styles.socialLinks}>
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