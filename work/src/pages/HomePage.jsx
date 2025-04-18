import React, { useEffect, useState } from 'react';
import styles from './css/homepage.module.css';
import { Container, Row, Col, Form, Navbar, Nav } from "react-bootstrap";
import { ChevronLeft, ChevronRight, MapPin, Search, ShoppingCart, User } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
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
  let autoPlayId;

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
      clearInterval(autoPlayId);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const showSlides = (index) => {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    setSlideIndex(index);
  };

  const autoPlay = () => {
    autoPlayId = setInterval(() => {
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
          className="rounded-4 mt-0 mb-3 "
        >
          <Container>
            <Navbar.Brand className="mb-2">
              <img src="/duzo.png" alt="DUZO" width="100" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-5" />

            <Navbar.Collapse id="basic-navbar-nav">
              <div className="d-flex flex-column w-100 pt-4">
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
 
      <section className="py-5 rounded-5 mb-3" style={{ backgroundColor: '#FFC998' }}>
  <div className="container">
    <h2 className="text-center mb-4">OUR SERVICES</h2>
    
    <div className="row">
      {/* Left side: services */}
      <div className="col-lg-9">
        <div className="row row-cols-3 row-cols-sm-2 row-cols-md-3 g-4">
          {[
            { name: "Household cleaning", action: () => navigate("/household"), image: "/housecleaning.png" },
            { name: "Chef and cook",  action: () => setShowChefModal(true), image: "/chefCooking.png" },
            { name: "AC and appliances repair", action: () => setShowApplianceModal(true), image: "/acRepair.png" },
            { name: "Beauty and Salon", action: () => setShowModal(true), image: "/beautySalon.png" },
            { name: "Electrician, Plumber and Carpenter", action: () => navigate("/homeservices"), image: "/electrician_Plumber_carpenter.png" },
            { name: "Automobile cleaning", path: "/automobile", image: "/carCleaning.png" },
            { name: "Buy appliances", path: "/buy-appliances", image: "/electricalAppliances.png" },
            { name: "Rent appliances", path: "/rent-appliances", image: "/rentAppliance.png" },
            { name: "Sell appliances", path: "/sell-appliances", image: "/sellAppliance.png" }
          ].map((service, index) => (
            <div key={index} className="col">
              <div 
                className="card h-100 border-0 bg-transparent"
                onClick={() => {
                  if (service.action) {
                    service.action();
                  } else {
                    window.location.href = service.path;
                  }
                }}
                style={{ cursor: 'pointer' }}
              >
                <div 
                  className="d-flex align-items-center justify-content-center" 
                  style={{ height: '150px', backgroundColor: 'transparent' }}
                >
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="img-fluid p-0 p-md-3" 
                    style={{ 
                      maxHeight: '100%', 
                      maxWidth: '80%', 
                      objectFit: 'contain',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>
                <div className="card-body p-0 text-center rounded-bottom">
                  <h5 className="card-title mb-0" style={{ fontSize: '0.9rem' }}>
                    {service.name}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: gray div */}
      <div className="col-lg-3 mt-4 mt-lg-0 d-none d-lg-block">
        <div style={{ backgroundColor: '#D9D9D9', height: '100%', borderRadius: '10px', padding: '1rem' }}>
          {/* Content inside the gray box, or leave it empty */}
        </div>
      </div>

    </div>
  </div>
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
      <div className="py-3 py-md-5 rounded-5" style={{ backgroundColor: '#FFD29E' }}>
  <h2 className="text-center mb-5">Why Choose Us?</h2>
  <div className="container">
    <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 g-3 g-md-4 justify-content-center">
      {[
        { img: "verified.png", text: "Verified Professionals" },
        { img: "affordable.png", text: "Affordable Pricing" },
        { img: "quickResponse.png", text: "Quick Response Time" },
        { img: "24_7.png", text: "24/7 Customer Support" },
        { img: "satisfaction.png", text: "Satisfaction guaranteed" }
      ].map((item, index) => (
        <div className="col text-center" key={index}>
          <img 
            src={item.img} 
            className="img-fluid mb-2 mb-md-3" 
            alt={item.text} 
            style={{ 
              width: '60px', 
              height: '60px',
              // Media query for larger screens
              '@media (min-width: 426px)': {
                width: '80px',
                height: '80px'
              }
            }}
          />
          <p className="fs-6 fs-md-5">{item.text}</p>
        </div>
      ))}
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
    
    </div>
  );
};

export default HomePage;