import React from 'react';
import styles from './css/contact.module.css';
import NavbarOne from "../components/navbarhome";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";

const ContactForm = () => {
  return (
    <div className={styles.container}>
       <NavbarOne />
      <main className={styles.main}>
        <h2>How Can We Help You?</h2>
        <textarea placeholder="Describe your issue here" className={styles.textarea} />
        <div className={styles.formGroup}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Contact Number" className={styles.input} />
          
          <input type="email" placeholder="Email" className={styles.input}style={{ width: '100%' }}/>
        </div>
        <button className={styles.submitButton}>Submit</button>
      </main>
      < Footer/>
      < Copyright/>
      </div>
  );
};

export default ContactForm;