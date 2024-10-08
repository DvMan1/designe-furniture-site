import styles from "./FormCallback.module.scss";
import Form from "./Form/Form";
import { SlSocialInstagram } from "react-icons/sl";
import { AiFillTikTok,AiOutlineYoutube} from "react-icons/ai";

const FormCallback = () => {
  return (
    <div className={styles.form_container} id="FormCallback">
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
              <AiOutlineYoutube  size={45}/>
              </li>
              <li className={styles.form_social}>
              <AiFillTikTok size={40} />

              </li>
              <li className={styles.form_social}>
              <SlSocialInstagram  size={33}/>
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
