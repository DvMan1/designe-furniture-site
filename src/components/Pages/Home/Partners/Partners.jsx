import Partner from "./Partner/Partner";
import styles from "./Partners.module.scss";

const Partners = () => {
  return (
    <div className={styles.partner_conteiner}>
      <Partner />
      <Partner />
      <Partner />
    </div>
  );
};

export default Partners;
