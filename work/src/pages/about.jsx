// // Import required dependencies and styles
import styles from './css/About.module.css'; // Import the CSS Module styles
import { FaInstagram, FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaBell, FaShoppingCart, FaUser } from "react-icons/fa"; // Import React Icons

const About = () => {
  return (
    <div className={styles.form}>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.searchBar}>
            <img src="/duzo.png" alt="DUZO" className={styles.logo} />
            <input type="text" placeholder="How can we help you with?" />
            <button className={styles.searchBtn}>🔍</button>
            {/* Replaced icons with React Icons */}
            <div className={styles.navIcons}>
              <FaBell className={styles.icon} />
              <FaShoppingCart className={styles.icon} />
              <FaUser className={styles.icon} />
            </div>
          </div>
          <nav className={styles.navbar}>
            <div className={styles.navLinks}>
              <a href="#" className={styles.navItem}>Homes</a>
              <a href="#" className={styles.navItem}>Beauty</a>
              <a href="#" className={styles.navItem}>Automobile</a>
              <a href="#" className={styles.navItem}>Buy/Rent</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.aboutUs}>
          <h2>About Us</h2>
          <div className={styles.aboutContent}>
            {/* Content goes here */}
          </div>
        </section>

        <section className={styles.team}>
          <h2>OUR TEAM</h2>
          <div className={styles.teamGrid}>
            {[...Array(4)].map((_, index) => (
              <div className={styles.teamMember} key={index}>
                <div className={styles.memberImage}></div>
                <div className={styles.memberImagee}>
                  <h3>Name</h3>
                  <p className={styles.position}>Position</p>
                  <p className={styles.note}>*Short Note*</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.faqList}>
            <h2>Frequently Asked Questions (FAQ'S)</h2>
            <details>
              <summary> </summary>
              <p></p>
            </details>
            <details>
              <summary> </summary>
              <p></p>
            </details>
            <details>
              <summary>*QUESTIONS*</summary>
              <p></p>
            </details>
            <details>
              <summary></summary>
              <p></p>
            </details>
          </div>
        </section>
      </main>

      <footer>
        <div className={styles.footerContent}>
          <div className={styles.footerLogoo}>
            <div className={styles.footerLogo}>
              <img src="/duzo-logo.png" alt="DUZO" />
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

export default About;
