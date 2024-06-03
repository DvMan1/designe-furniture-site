import styles from "./FormCallback.module.scss";
import Form from "./Form/Form";

const FormCallback = () => {
  return (
    <div className={styles.form_container}>
      <h2 className={styles.form_title}>
        ПРЕКРАСНАЯ КОНСУЛЬТАЦИЯ ДЛЯ БАГАТЫХ ЛЮДЕЙ С МАССАЖЕМ СТУПНЕЙ ГЕМОРРОЕМ{" "}
      </h2>
      <Form />
    </div>
  );
};
export default FormCallback;
