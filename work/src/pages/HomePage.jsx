import React, { useEffect, useState } from 'react';
import styles from './css/homepage.module.css';
import { ChevronLeft, ChevronRight, MapPin, Search, ShoppingCart, User } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import chef from "./assets/chef.png";
import service from "./assets/logo.png";
import cleaning from "./assets/oops1.png";
import myImage1 from "./assets/logo.png";
import { Link } from "react-router-dom";



const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
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

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <img src={myImage1} alt="DUZO Logo" className={styles.logoImage1} />
          <div className={styles.searchBar}>
            <input type="text" placeholder="How can we help you with?" className={styles.searchInput} />
            <button className={styles.searchButton}><Search size={18} /></button>
          </div>
          <div className={styles.headerIcons}>
          <Link to="/abdul">
          <button className={styles.iconButton}><MapPin size={isMobile ? 24 : 30} /></button>
          </Link>
            
            <button className={styles.iconButton}><ShoppingCart size={isMobile ? 24 : 30} /></button>
             <Link to="/d">
             <button className={styles.iconButton}><User size={isMobile ? 24 : 30} /></button>
          </Link>
          
          </div>
        </div>
        <nav className={styles.navbar}>
          <a href="#" className={styles.navItem}>Homes</a>
          <Link to="/salon">
           
       
          <a href="#" className={styles.navItem}>Beauty</a>
          </Link>
          <a href="#" className={styles.navItem}>Automobile</a>
          <a href="#" className={styles.navItem}>Buy / Rent</a>
        </nav>
      </header>

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
        <div className={styles.servicesGrid}>
          {["Household cleaning", "Chef and cook", "AC and appliances repair", "Beauty and Salon", "Electrician, Plumber and Carpenter", "Automobile cleaning", "Buy appliances", "Rent appliances", "Sell appliances"].map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}></div>
              <p className={styles.serviceTitle}>{service}</p>
            </div>
          ))}
        </div>
        <div className={styles.serviceShowcase}></div>
      </section>

      {/* Hourly Service Poster */}
      <section className={styles.hourlyServiceSection}>
        <h3 className={styles.hourlyServiceTitle}>Hourly service poster</h3>
      </section>

      {/* Most Booked Services */}
      <section className={styles.mostBookedSection}>
        <h2 className={styles.sectionTitle}>Most Booked Services</h2>
        <div className={styles.mostBookedGrid}>
          {[...Array(5)].map((_, index) => (
            <div key={index} className={styles.mostBookedCard}></div>
          ))}
        </div>
      </section>

      <h1 className={styles.mainTitle}>Need Appliances...Buy or Rent with Ease</h1>
      
      <div className={styles.optionsGrid}>
        <div className={styles.optionCard}>
          <button 
            className={styles.actionButton}
            onClick={() => console.log('Navigate to buy')}
          >
            Buy Appliances
          </button>
        </div>
        <div className={styles.optionCard}>
          <button 
            className={styles.actionButton}
            onClick={() => console.log('Navigate to rent')}
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

      <div className={styles.footerBottom}>
        <p>© 2024 - DUZO</p>
      </div>
    </div>
  );
};

export default HomePage;