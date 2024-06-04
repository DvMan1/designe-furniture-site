import { useState } from "react";
import icon from "../../../assets/symbol-defs.svg";
import styles from "./CallbackButton.module.scss";
import CallbackModal from "./CallbackModal/CallbackModal";

const CallbackButton = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const handleToggleModal = () => {
    setVisibleModal((prevVisibleModal) => !prevVisibleModal);
  };

  return (
    <>
      {!visibleModal && (
        <div className={styles.icon_box}>
          <svg className={styles.icon} onClick={handleToggleModal}>
            <use href={`${icon}#icon-phone`}></use>
          </svg>
        </div>
      )}

      {visibleModal && <CallbackModal onClose={handleToggleModal} />}
    </>
  );
};

export default CallbackButton;
