import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import myImage3 from "./assets/oops1.png";
import myImage2 from "./assets/oops.png";
import myImage1 from "./assets/logo.png";
import styles from "./css/Oops.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Oops = () => {
  return (
    <div className={`min-vh-100 d-flex flex-column ${styles.pageContainer}`}>
      {/* Header */}
      <header className={`py-2 px-3 ${styles.pageHeader}`}>
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <div className={styles.logoContainer}>
              <img src={myImage1} alt="DUZO Logo" className={styles.logoImage} />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={`flex-grow-1 d-flex align-items-center justify-content-center py-4 px-3 ${styles.pageMain}`}>
        <div className="container">
          <div className={`row align-items-center justify-content-between ${styles.contentWrapper}`}>
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <div className={`d-flex flex-column align-items-center ${styles.formContainer}`}>
                <img src={myImage2} alt="DUZO Logo" className={`mb-4 ${styles.formLogo}`} />
                <h2 className={`fw-bold ${styles.headingText}`}>
                  Sit tight.<br />Our services are reaching you soon!!
                </h2>
              </div>
            </div>

            {/* Image Section */}
            <div className={`col-md-6 text-center ${styles.imageSection}`}>
              <img src={myImage3} alt="Illustration" className={`img-fluid ${styles.illustrationImage}`} />
            </div>
          </div>
        </div>
      </main>

      {/* Footer - Updated for single line on all screen sizes */}
      <footer className={`py-3 ${styles.pageFooter}`}>
        <div className="container">
          <div className={`d-flex justify-content-between align-items-center ${styles.footerContent}`}>
            <div className={styles.copyrightText}>
              copyrights © 2024 - DUZO
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

export default Oops;