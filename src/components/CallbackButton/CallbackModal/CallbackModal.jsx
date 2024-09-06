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
    <div onClick={handleBackDropClick} className={styles.ModalOverlay}>
      <div className={styles.ModalContent}>
        <button onClick={onClose} className={styles.ModalCloseButton}>Close Modal</button>
        Позвони
      </div>
    </div>,
    modalRoot
  );
};

export default CallbackModal;
