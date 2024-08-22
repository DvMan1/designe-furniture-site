import styles from "./Fact.module.scss";
import aboutData from "../../../../../data/about.json";

const Fact = ({  index, handleIndex }) => {
  const content = aboutData.find((item) => item.index === index);
  const giveIndex = () => {
    handleIndex(index);
  };
  return (
    <div className={styles.fact_box} onMouseEnter={giveIndex}>
      <h3 className={styles.fact_title}>{content.title}</h3>
      <p className={styles.fact_article}>{content.description}</p>
    </div>
  );
};

export default Fact;
