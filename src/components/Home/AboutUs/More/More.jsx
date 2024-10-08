import styles from "./More.module.scss";
import aboutData from "../../../../data/about.json";
import FAQdata from "../../../../data/FAQ.json";
const More = ({ index }) => {
  const content = aboutData.find((item) => item.index === index);

  return (
    <div className={styles.more_box}>
      {content ? (

          <p className={styles.more_article}>{content.description}</p>

      ) : (
        <p>Контент не найден</p>
      )}
    </div>
  );
};

export default More;
