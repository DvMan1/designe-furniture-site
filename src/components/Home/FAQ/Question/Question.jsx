import styles from "./Question.module.scss";
import aboutData from "../../../../data/FAQ.json";
import { useState } from "react";

const Question = ({ index }) => {
  const [visible, setVisible] = useState(false);
  const content = aboutData.find((item) => item.index === index);

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <li className={styles.question_conteiner} onClick={changeVisible}>
      <div className={styles.question_wrapper}>
        <h3 className={styles.question_title}>{content.title}</h3>
        {visible && (
          <p className={styles.question_description}>{content.description}</p>
        )}
      </div>
    </li>
  );
};

export default Question;
