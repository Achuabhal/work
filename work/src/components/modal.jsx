import React from "react";
import styles from "./css/Modal.module.css";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.container}>
        <div className="row justify-content-center align-items-center">
          <div className={`col-12 ${styles.modalContent}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
