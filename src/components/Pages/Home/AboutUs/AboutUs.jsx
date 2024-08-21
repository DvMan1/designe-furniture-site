import styles from "./AboutUs.module.scss";
import Fact from "./Fact/Fact";
import { useState } from "react";
import More from "./More/More";

const AboutUs = () => {
  const [lastFactIndex, setLastFactIndex] = useState(1);
  return (
    <div className={styles.advantages_box}>
      <div className={styles.about_us_box}>
        <div className={styles.title_box}>
          <h2 className={styles.advantages_title}>Почему мы</h2>
        </div>

        <div className={styles.more_countiner}>
          <ul className={styles.facts_box}>
            <Fact
              title="Патамучто"
              article="Расскажите, в чем преимущество или отличие"
              index={1}
              handleIndex={setLastFactIndex}
            />
            <Fact
              title="Патамучто"
              article="Расскажите, чему вы уделяете больше всего внимания"
              index={2}
              handleIndex={setLastFactIndex}
            />
            <Fact
              title="Патамучто"
              article="Расскажите, в чем преимущество работы именно с вашей командой"
              index={3}
              handleIndex={setLastFactIndex}
            />
          </ul>
          <More index={lastFactIndex} />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
