import styles from "./Fact.module.scss";
import aboutData from "../../../../data/about.json";


const Fact = ({ index, handleIndex }) => {
  const content = aboutData.find((item) => item.index === index);
 

  const giveIndex = () => {
    handleIndex(index);
  };

  return (
    <li
      className={styles.fact_box}
      onMouseEnter={giveIndex}
    >
      <h3 className={styles.fact_title}>{content.title}</h3>
    </li>
  );
};

export default Fact;
