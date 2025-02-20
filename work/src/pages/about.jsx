import React from 'react';
import styles from './css/About.module.css'; // import the CSS Module styles

const About= () => {
  return (
    <div>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.logo}>DUZO</div>
          <div className={styles.searchBar}>
            <input type="text" placeholder="How can we help you with?" />
            <button className={styles.searchBtn}>🔍</button>
          </div>
          <div className={styles.navLinks}>
            <a href="#" className={styles.navItem}>Homes</a>
            <a href="#" className={styles.navItem}>Beauty</a>
            <a href="#" className={styles.navItem}>Automobile</a>
            <a href="#" className={styles.navItem}>Buy/Rent</a>
          </div>
          <div className={styles.navIcons}>
            <span className={styles.notification}>🔔</span>
            <span className={styles.cart}>🛒</span>
            <span className={styles.profile}>👤</span>
          </div>
        </nav>
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
            <div className={styles.teamMember}>
              <div className={styles.memberImage}></div>

              <div className={styles.memberImagee}>
              <h3>Name</h3>
             <p className={styles.position}>Position</p>
              <p className={styles.note}>*Short Note*</p>
              </div>
              
            </div>
            <div className={styles.teamMember}>
            <div className={styles.memberImage}></div>

            <div className={styles.memberImagee}>
              <h3>Name</h3>
              <p className={styles.position}>Position</p>
              <p className={styles.note}>*Short Note*</p>
              </div>
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}></div>

              <div className={styles.memberImagee}>
              <h3>Name</h3>            
              <p className={styles.position}>Position</p>
              <p className={styles.note}>*Short Note*</p>
              </div>
              
            </div>
            <div className={styles.teamMember}>
              <div className={styles.memberImage}></div>

              <div className={styles.memberImagee}>
              <h3>Name</h3>           
              <p className={styles.position}>Position</p>
              <p className={styles.note}>*Short Note*</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.faq}>
          
          <div className={styles.faqList}><br></br>
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
          <div className={styles.footerLogo}>
            <img src="/duzo-logo.png" alt="DUZO" />
          </div>
          <div className={styles.footerInfo}>
            <p>📞 Phone number</p>
            <p>✉️ E-mail address</p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}>Instagram</a>
              <a href="#" className={styles.socialIcon}>Facebook</a>
              <a href="#" className={styles.socialIcon}>Twitter</a>
            </div>
          </div>
          <div className={styles.footerLocation}>
            <h3>Services Available At</h3>
            <p>Bengaluru</p>
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
        <div className={styles.footerBottom}>
          <p>© 2024 - DUZO</p>
        </div>
      </footer>
    </div>
  );
}

export default About;
