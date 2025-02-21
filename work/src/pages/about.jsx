// // Import required dependencies and styles
import styles from './css/About.module.css'; // Import the CSS Module styles
import { FaInstagram, FaFacebook, FaTwitter, FaPhone, FaEnvelope, FaBell, FaShoppingCart, FaUser } from "react-icons/fa"; // Import React Icons

const About = () => {
  return (
    <div className={styles.formm}>
    <div className={styles.form}>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.searchBar}>
            <img src="/duzo.png" alt="DUZO" className={styles.logo} />
            <div className={styles.searchInputContainer}>
    <input
      type="text"
      placeholder="How can we help you with?"
      className={styles.searchInput}
    />
    <button className={styles.searchBtn}>
      <span className={styles.searchIcon}>🔍</span>
    </button>
  </div>
            <div className={styles.navIcons}>
              <div className={styles.iconn}>
              <img src="/image.png" className={styles.iconn} />
              </div>
              <img src="/cart.png" className={styles.icon} />
              <img src="/user.png" className={styles.icon} />
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
        <div className={styles.banner}>
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
            <div className={styles.faqListt}>
            <h2> Frequently Asked Questions (FAQ'S) </h2>
            </div>
            <div className={styles.faqDetails}>
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
          </div>
        </section>
        </div>
      </main>

      <footer>
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
              <li><a href="#"></a>Services</li>
              <li><a href="#"></a>Hiring</li>
              <li><a href="#"></a>About Us</li>
              <li><a href="#"></a>Contact Us</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className={styles.footerBottom}>
        <p>© 2024 - DUZO</p>
      </div>
    </div>
    </div>
  );
};

export default About;
