import { useState } from "react";
import styles from "./CallbackButton.module.scss";
import CallbackModal from "./CallbackModal/CallbackModal";
import { FaPhoneFlip } from "react-icons/fa6";


const CallbackButton = () => {
  const [visibleModal, setVisibleModal] = useState(false);
 

  const handleToggleModal = () => {
    setVisibleModal((prevVisibleModal) => !prevVisibleModal);
  };

  return (
    <>
      {!visibleModal && (
        <div className={styles.icon_box}>
          <FaPhoneFlip className={styles.icon} onClick={handleToggleModal}/>
          {/* <svg className={styles.icon} onClick={handleToggleModal}>
            <use href={`${icon}#icon-phone`}></use>
          </svg> */}
        </div>
      )}

      {visibleModal && <CallbackModal onClose={handleToggleModal} />}
    </>
  );
};

export default CallbackButton;
