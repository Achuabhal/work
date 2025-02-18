import React from "react";
import styles from "./css/login.module.css";

const CreateAccount = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <div className={styles.header}>
          <h2>CREATE YOUR ACCOUNT</h2>
          <button className={styles.closeButton}>&times;</button>
        </div>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="" className={styles.input} />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contact">Contact Number</label>
            <div className={styles.phoneInput}>
              <span className={styles.countryCode}>+91</span>
              <input type="tel" id="contact" placeholder="" className={styles.input} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="otp">OTP</label>
            <div className={styles.otpContainer}>
              <input type="text" maxLength="1" className={styles.otpInput} />
              <input type="text" maxLength="1" className={styles.otpInput} />
              <input type="text" maxLength="1" className={styles.otpInput} />
              <input type="text" maxLength="1" className={styles.otpInput} />
            </div>
          </div>

          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
