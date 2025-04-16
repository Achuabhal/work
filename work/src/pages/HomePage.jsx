import React, { useEffect, useState,useRef } from 'react';
import styles from './css/homepage.module.css';
import { Container, Row, Col, Form, Navbar, Nav } from "react-bootstrap";
import { ChevronLeft, ChevronRight, MapPin, Search, ShoppingCart, User } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import chef from "./assets/chef.png";
import service from "./assets/logo.png";
import cleaning from "./assets/oops1.png";
import myImage1 from "./assets/logo.png";
import { Link } from "react-router-dom";
import SalonPopUp from "../components/popup/SalonPopUp"; 
import ChefModal from "../components/popup/ChefModal";
import ApplianceModal from "../components/popup/ApplianceModal";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";
import AutoMobilePopUp from '../components/popup/AutoMobilePopUp';
import BuyAppliances from '../components/popup/BuyAppliances';


import { useNavigate } from 'react-router-dom';
const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showChefModal, setShowChefModal] = useState(false);
  const [showApplianceModal, setShowApplianceModal] = useState(false);
  const navigate = useNavigate();
  const slides = [chef, service, cleaning];
  const autoPlayId = useRef(null);

  useEffect(() => {
    // Check if screen is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Start autoplay for carousel
    autoPlay();

    // Cleanup
    return () => {
      clearInterval(autoPlayId.current);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const showSlides = (index) => {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    setSlideIndex(index);
  };

  const autoPlay = () => {
    autoPlayId.current = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
  };
  

  const [showModal, setShowModal] = useState(false);
  const [showModalAuto, setShowModalAuto] = useState(false);
  const [showModalbuy, setShowModalbuy] = useState(false);




  return (
    <div className={styles.container}>
      {/* Header */}
      <Navbar
          style={{ backgroundColor: "#FFD29E" }}
          expand="lg"
          className="rounded-4 my-3 "
        >
          <Container>
            <Navbar.Brand className="mb-5">
              <img src="/duzo.png" alt="DUZO" width="100" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-5" />

            <Navbar.Collapse id="basic-navbar-nav">
              <div className="d-flex flex-column w-100">
                <div className="d-flex w-100 align-items-center justify-content-between gap-3 flex-wrap">
                  <div className="flex-grow-1">
                    <Form
                      className="w-100"
                      style={{ minWidth: "200px", maxWidth: "400px" }}
                    >
                      <Form.Group className="input-group">
                        <div
                          className="d-flex align-items-center w-100 rounded-pill px-2"
                          style={{
                            backgroundColor: "#FFBE5D",
                            padding: "5px",
                            border: "none",
                          }}
                        >
                          <Form.Control
                            type="search"
                            placeholder="How can we help you?"
                            className="form-control border-0 shadow-none bg-transparent"
                          />
                          <img
                            src="/search.png"
                            alt="Search"
                            width="25"
                            height="25"
                            className="ms-2"
                          />
                        </div>
                      </Form.Group>
                    </Form>
                  </div>

                  <div style={{ minWidth: "150px", maxWidth: "200px" }}>
                    <Form className="w-100">
                      <Form.Group className="input-group">
                        <div
                          className="d-flex align-items-center w-100 rounded-pill px-2"
                          style={{
                            backgroundColor: "#FFBE5D",
                            padding: "5px",
                            border: "none",
                          }}
                        >
                          <Form.Control
                            type="text"
                            className="form-control border-0 shadow-none bg-transparent"
                          />
                          <img
                            src="/image.png"
                            alt="Image"
                            width="25"
                            height="25"
                            className="ms-2"
                          />
                        </div>
                      </Form.Group>
                    </Form>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                    <img src="/cart.png" width="26" height="26" alt="Cart" />
                    <img src="/user.png" width="26" height="26" alt="Profile" />
                  </div>
                </div>

                <div className="w-100 d-flex justify-content-start mt-2 px-3">
                  <Nav className="d-flex gap-3 flex-wrap">
                    <Nav.Link href="#">Homes</Nav.Link>
                    <Nav.Link href="#">Beauty</Nav.Link>
                    <Nav.Link href="#">Automobile</Nav.Link>
                    <Nav.Link href="#">Buy/Rent</Nav.Link>
                  </Nav>
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

 {/* Hero Banner */}
 <div className={styles.heroBanner}>
        {!isMobile && (
          <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={() => showSlides(slideIndex - 1)}>
            <ChevronLeft size={24} />
          </button>
        )}
        <div className={styles.bannerContent}>
          <div className={styles.slideImageWrapper}>
            <img src={slides[slideIndex]} alt="Slide Illustration" className={styles.slideImage} />
          </div>
          <div className={styles.bannerText}>
            <h2 className={styles.bannerHeading}>SOMETHING'S<br />COOKING UP!!</h2>
          </div>
        </div>
        {!isMobile && (
          <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={() => showSlides(slideIndex + 1)}>
            <ChevronRight size={24} />
          </button>
        )}
        <div className={styles.carouselDots}>
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`${styles.dot} ${index === slideIndex ? styles.activeDot : ''}`} 
              onClick={() => showSlides(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Services Section */}
 
      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>OUR SERVICES</h2>
        <main className={`${styles.pageMain} flex-grow-1 d-flex justify-content-center align-items-center p-4`}>
        <div className={styles.servicesGrid}>
          {[
            { name: "Household cleaning", action: () => navigate("/household") },
            { name: "Chef and cook",  action: () => setShowChefModal(true) }, // Update this line },
            { name: "AC and appliances repair",action: () => setShowApplianceModal(true) },
            {
              name: "Beauty and Salon",
              action: () => setShowModal(true),
            },
            { name: "Electrician, Plumber and Carpenter", path: "/homeservices" },
            { name: "Automobile cleaning",
              action: () => setShowModalAuto(true),

             },
             { name: "Buy appliances", action: () => setShowModalbuy(true) },

            { name: "Rent appliances", path: "/rent-appliances" },
            { name: "Sell appliances", path: "/sell-appliances" }
          ].map((service, index) => (
            <div
            key={index}
            className={styles.serviceCard}
            onClick={() => {
              if (service.action) {
                service.action();
              } else {
                window.location.href = service.path;
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <div className={styles.serviceIcon}></div>
            <p className={styles.serviceTitle}>{service.name}</p>
          </div>
          
          ))}
        </div>
        <div className={styles.serviceShowcase}></div>
        </main>
      </section>
      

      {/* Hourly Service Poster */}
      <section className={styles.hourlyServiceSection}>
        <h3 className={styles.hourlyServiceTitle}>Hourly service poster</h3>
      </section>

      {/* Most Booked Services */}
      <section className={styles.mostBookedSection}>
        <h2 className={styles.sectionTitle}>Most Booked Services</h2>
        <div className={styles.mostBookedGrid}>
          {[...Array(4)].map((_, index) => (
            <div key={index} className={styles.mostBookedCard}></div>
          ))}
        </div>
      </section>

      <h1 className={styles.mainTitle}>Need Appliances...Buy or Rent with Ease</h1>
      
      <div className={styles.optionsGrid}>
  <div className={styles.optionCard}>
  <button 
  className={styles.actionButton}
  onClick={() => setShowModalbuy(true)}  // This opens the first modal
>
  Buy Appliances
</button>

  </div>
  <div className={styles.optionCard}>
    <button 
      className={styles.actionButton}
      onClick={() => window.location.href = "/rent-appliances"}
    >
      Rent Appliances
    </button>
  </div>
</div>

      <div className={styles.sellSection}>
        <h2>Sell your old Appliances and Earn</h2>
      </div>

      <div className={styles.testimonials}>
        <h2>Happy Customers</h2>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            <span className={styles.quoteStart}>&ldquo;</span>
            <p>The service was amazing! I'm extremely satisfied with the quality of work.</p>
            <span className={styles.quoteEnd}>&rdquo;</span>
          </div>
          <div className={styles.testimonialCard}>
            <span className={styles.quoteStart}>&ldquo;</span>
            <p>Fast response time and professional service. Highly recommended!</p>
            <span className={styles.quoteEnd}>&rdquo;</span>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <h2>Why Choose Us?</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}></div>
            <p className={styles.featureText}>Verified Professionals</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}></div>
            <p className={styles.featureText}>Affordable Pricing</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}></div>
            <p className={styles.featureText}>Quick Response Time</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}></div>
            <p className={styles.featureText}>24/7 Customer Support</p>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}></div>
            <p className={styles.featureText}>Satisfaction guaranteed</p>
          </div>
        </div>
      </div>
  

      <footer className={styles.footerr}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogoo}>
            <div className={styles.footerLogo}>
              <img src={myImage1} alt="DUZO" className={styles.footerLogo} />
            </div>
            <div className={styles.footerInfo}>
              <p><FaPhone /> +1 (234) 567-8900</p>
              <p><FaEnvelope /> info@duzo.com</p>
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialIcon}><FaInstagram size={24} /></a>
                <a href="#" className={styles.socialIcon}><FaFacebook size={24} /></a>
                <a href="#" className={styles.socialIcon}><FaTwitter size={24} /></a>
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
              <Link to="/about">
          
        
              <li><a href="#">About Us</a></li>
              </Link>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </footer>
{/* SalonPopUp Modal */}
<SalonPopUp show={showModal} onHide={() => setShowModal(false)} />
<ChefModal show={showChefModal} onHide={() => setShowChefModal(false)} />
<ApplianceModal show={showApplianceModal} onHide={() => setShowApplianceModal(false)} />
<AutoMobilePopUp show={showModalAuto} onHide={() => setShowModalAuto(false)} />
<BuyAppliances show={showModalbuy} onHide={() => setShowModalbuy(false)} />



< Copyright/>
      <div className={styles.footerBottom}>
        <p>© 2024 - DUZO</p>
      </div>
    </div>
  );
};

export default HomePage;