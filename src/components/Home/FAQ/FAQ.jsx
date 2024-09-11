import styles from "./FAQ.module.scss";
import Question from "./Question/Question";

const FAQ = () => {
  return (
    <div className={styles.FAQ_conteiner}>
      <div className={styles.FAQ_wrapper}>
        <div className={styles.FAQ_title_wrapper}>
          <h2 className={styles.FAQ_title}>FAQ</h2>
        </div>

        <ul className={styles.FAQ_question_wrapper}>
          <Question index={1} />
          <Question index={2} />
          <Question index={3} />
          <Question index={4} />
        </ul>
      </div>
    </div>
  );
};
export default FAQ;
