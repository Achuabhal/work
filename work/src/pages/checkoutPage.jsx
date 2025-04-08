import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './css/contact.module.css';

const CheckoutPage = () => {
  return (
    <div className="bg-light" style={{ fontFamily: 'Outfit' }}>
    {/* Header */}
    <div className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3" style={{ backgroundColor: '#ffd5a4' }}>
  <div className="d-flex align-items-center">
    <img src="/duzo.png" alt="DUZO Logo" style={{ height: '40px' }} className="img-fluid" />
    <h5 className="mb-0 ms-2">CHECKOUT</h5>
  </div>
  <img src="/user.png" alt="user icon" className="img-fluid" style={{ width: '25px' }} />
</div>
<div className="container-fluid mt-2 p-3 rounded-4" style={{ backgroundColor: '#FFC998', fontFamily: 'Outfit', fontWeight: 'bold' }}>
  <div className="row gy-4"> {/* Bootstrap's responsive row spacing */}

    {/* Left Column */}
    <div className="col-12 col-md-5 px-4">
      <div className="p-3 rounded shadow-sm mb-3">
        <select className="rounded-4 form-select mb-3 fw-bold">
          <option>Send Booking Details To</option>
        </select>
        <select className="rounded-4 form-select mb-3 fw-bold">
          <option>Address</option>
        </select>
        <select className="rounded-4 form-select mb-3 fw-bold">
          <option>Payment Method</option>
        </select>

        <div className="d-flex flex-column align-items-start">
          <button className="mt-4 btn btn-dark rounded-pill col-sm-10 col-md-8 col-lg-6 mb-2">Cancellation Policy</button>
          <a href="#" className="text-decoration-none text-black mt-1">Learn More</a>
        </div>
      </div>
    </div>

    {/* Right Side Columns */}
    <div className="col-12 col-md-7 px-5 d-flex flex-column align-items-lg-end">

  {/* Details Section */}
  <div className="p-3 bg-white rounded shadow-sm mb-3 col-12 col-lg-6">
    <center><h6>Details</h6></center> 
    <div className="d-flex justify-content-between mb-2">
      <div>Date</div>
      <div>– <span className="ms-2">xxx</span></div>
    </div>
    <div className="d-flex justify-content-between mb-2">
      <div>Time</div>
      <div>– <span className="ms-2">xxx</span></div>
    </div>
    <div className="d-flex justify-content-between mb-2">
      <div>Number of People</div>
      <div>– <span className="ms-2">xxx</span></div>
    </div>
    <div className="d-flex justify-content-between">
      <div>Number of Dishes</div>
      <div>– <span className="ms-2">xxx</span></div>
    </div>
  </div>

  {/* Bill Summary Section */}
  <div className="p-3 rounded shadow-sm mb-3 col-12 col-lg-6">
 <center><h6>BILL SUMMARY</h6></center>   
  <div className="p-3 bg-white rounded shadow-sm mb-3 col-12 col-lg-12">
    
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
