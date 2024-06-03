import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./CallbackModal.module.scss";

const modalRoot = document.querySelector("#modal-root");

const CallbackModal = ({ onClose }) => {
  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return createPortal(
    <div onClick={handleBackDropClick} className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button onClick={onClose}>Close Modal</button>
        Позвони
      </div>
    </div>,
    modalRoot
  );
};

export default CallbackModal;
