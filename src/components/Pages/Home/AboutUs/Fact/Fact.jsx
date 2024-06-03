import styles from "./Fact.module.scss";
import aboutData from "../../../../../data/about.json";

const Fact = ({ title, article, index, handleIndex }) => {
  const content = aboutData.find((item) => item.index === index);
  const giveIndex = () => {
    handleIndex(index);
  };
  return (
    <div className={styles.fact_box} onMouseEnter={giveIndex}>
      <h3 className={styles.fact_title}>{title}</h3>
      <p className={styles.fact_article}>{article}</p>
    </div>
  );
};

export default Fact;
