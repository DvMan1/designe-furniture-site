import styles from "./AboutUs.module.scss";
import Fact from "./Fact/Fact";
import { useState } from "react";
import More from "./More/More";


const AboutUs = () => {
  const [lastFactIndex, setLastFactIndex] = useState(1);
  return (
    <div className={styles.advantages_box}>
      <h2 className={styles.advantages_title}>Почему мы</h2>
      <ul className={styles.facts_box}>
        <Fact title="Патамучто" article="ФХФХХХФХФХФХФХФХФФХХФХХ" index={1}handleIndex={setLastFactIndex}/>
        <Fact title="Патамучто" article="ФХФХХХФХФХФХФХФХФФХХФХХ"index={2}handleIndex={setLastFactIndex} />
        <Fact title="Патамучто" article="ФХФХХХФХФХФХФХФХФФХХФХХ"index={3} handleIndex={setLastFactIndex}/>
        <Fact title="Патамучто" article="ФХФХХХФХФХФХФХФХФФХХФХХ"index={4}handleIndex={setLastFactIndex} />
      </ul>
      <More index={lastFactIndex}/>
    </div>
  );
};
export default AboutUs;
