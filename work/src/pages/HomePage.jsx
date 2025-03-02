import React, { useEffect, useState } from 'react';
import styles from './css/homepage.module.css';
import { ChevronLeft, ChevronRight, MapPin, Search, ShoppingCart, User } from 'lucide-react';
import chef from "./assets/chef.png";
import service from "./assets/logo.png";
import cleaning from "./assets/oops1.png";
import myImage1 from "./assets/logo.png";

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [chef, service, cleaning, chef, service]; // Added two more slides
  let autoPlayId;

  useEffect(() => {
    autoPlay();
    return () => clearInterval(autoPlayId);
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
          {/* <div className={styles.logo}>DUZO</div> */}
          <img src={myImage1} alt="DUZO Logo" className={styles.logoImage1} />
          <div className={styles.searchBar}>
            <input type="text" placeholder="How can we help you with?" className={styles.searchInput} />
            <button className={styles.searchButton}><Search size={18} /></button>
          </div>
          <div className={styles.headerIcons}>
            <button className={styles.iconButton}><MapPin size={30} /></button>
            <button className={styles.iconButton}><ShoppingCart size={30} /></button>
            <button className={styles.iconButton}><User size={30} /></button>
          </div>
        </div>
        <nav className={styles.navbar}>
          <a href="#" className={styles.navItem}>Homes</a>
          <a href="#" className={styles.navItem}>Beauty</a>
          <a href="#" className={styles.navItem}>Automobile</a>
          <a href="#" className={styles.navItem}>Buy / Rent</a>
        </nav>
      </header>

      {/* Hero Banner */}
      <div className={styles.heroBanner}>
        <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={() => showSlides(slideIndex - 1)}>
          <ChevronLeft size={24} />
        </button>
        <div className={styles.bannerContent}>
          <img src={slides[slideIndex]} alt="Slide Illustration" className={styles.logoImage} />
          <div className={styles.bannerText}>
            <h2 className={styles.bannerHeading}>SOMETHING'S<br />COOKING UP!!</h2>
          </div>
        </div>
        <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={() => showSlides(slideIndex + 1)}>
          <ChevronRight size={24} />
        </button>
        <div className={styles.carouselDots}>
          {[0, 1, 2].map((index) => (
            <span key={index} className={`${styles.dot} ${index === slideIndex % 3 ? styles.activeDot : ''}`} onClick={() => showSlides(index)}></span>
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
    <div className={styles.serviceShowcase}> </div> {/* Placeholder for the empty rectangle */}
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
          {[...Array(5)].map((_, index) => (
            <div key={index} className={styles.mostBookedCard}></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
