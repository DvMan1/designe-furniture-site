import styles from "./FormCallback.module.scss";
import Form from "./Form/Form";

const FormCallback = () => {
  return (
    <div className={styles.form_container}>
      <div className={styles.form_box}>
        <h2 className={styles.form_title}>Наши контакти</h2>
        <div className={styles.form_wrapper}>
          <div className={styles.info_box}>
            <div className={styles.form_contact}>
              <p className={styles.contact}>Телефон: +380 123 456 78</p>
              <p className={styles.contact}>Почта: hello@firm.com</p>
            </div>

            <p className={styles.form_adress}>Впишите адрес вашей компании</p>
            <ul className={styles.form_sociallinks}>
              <li className={styles.form_social}>
                <a href="">Facebook</a>
              </li>
              <li className={styles.form_social}>
                <a href="">Twitter</a>
              </li>
              <li className={styles.form_social}>
                <a href="">Instagram</a>
              </li>
            </ul>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};
export default FormCallback;
