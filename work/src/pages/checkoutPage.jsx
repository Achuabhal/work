import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/contact.module.css';

const CheckoutPage = () => {
  return (
    <div className="bg-light" style={{ fontFamily: 'Outfit' }}>
    {/* Header */}
    <div className="d-flex gap-3 align-items-center p-3 rounded-3" style={{ backgroundColor: '#ffd5a4' }}>
      <img src="/duzo.png" alt="DUZO Logo" style={{ height: '40px' }} />
      <h5 className="mb-0">CHECKOUT</h5>
      <img src="/user.png" alt="user icon" className="ms-auto" style={{ height: '20px' }} />
    </div>
  

      {/* Main Content */}
      <div className="container mt-5" style={{ backgroundColor: '#FFC998', fontFamily: 'Outfit', fontWeight: 'bold' }}>
      <div className="row gap-5 justify-content-between">
  {/* Left Column */}
  <div className="col-md-4 align-items-start ms-5 me-5"> {/* Increased ms-4 to ms-5 for more margin */}
    <div className="p-3 rounded shadow-sm mb-3" style={{ fontFamily: 'Outfit', fontWeight: 'bolder' }}>
      <select className="rounded-4 form-select mb-3" style={{ fontWeight: 'bold' }}>
        <option>Send Booking Details To</option>
      </select>
      <select className="rounded-4 form-select mb-3" style={{ fontWeight: 'bold' }}>
        <option>Address</option>
      </select>
      <select className="rounded-4 form-select mb-3" style={{ fontWeight: 'bold' }}>
        <option>Payment Method</option>
      </select>

      <div className="d-flex flex-column align-items-start">
        <button className="mt-4 btn btn-dark rounded-pill w-50 mb-2">Cancellation Policy</button>
        <a href="#" className="text-decoration-none text-black mt-1">Learn More</a>
      </div>
    </div>
  </div>

  {/* Middle Column */}
  <div className="col-md-3 align-items-start ms-3 ">
    <div className="p-3 mt-4 bg-white ms-3 rounded shadow-sm mb-3">
      <h6>Details</h6>
      <p>Date      – xxx<br />Time     – xxx<br />Number of People      – xxx<br />Number of Dishes – xxx</p>
    </div>
    <div className="col-md-12">
        <center><h6 className='ms-4'>BILL SUMMARY</h6></center>  
      <div className="p-3 ms-4 bg-white rounded-3 shadow-sm mb-3">
        {/* Right Column */}
        
        <div className="border p-2 mb-2">
          <div>Total Amount</div>
          <div>Token Amount</div>
          <div>Remaining Amount</div>
        </div>
      </div>
    </div>
  </div>

    
    
  </div>
</div>

      {/* Footer */}
      <footer className={styles.footerr}>
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
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Hiring</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
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

export default CheckoutPage;
