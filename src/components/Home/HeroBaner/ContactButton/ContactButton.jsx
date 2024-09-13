import styles from "./ContactButton.module.scss";
const ContactButton = () => {
  return (
    <div className={styles.hero_button_box}>
      <a href="#FormCallback" className={styles.hero_button}>
        Contact
      </a>
    </div>
  );
};
export default ContactButton;
