import styles from "./HeroBaner.module.scss";
import hero_img from "../../../../assets/hero_img.jpg";
const HeroBaner = () => {
  return (
    <div className={styles.hero_box}>
      <img className={styles.hero_img} src={hero_img} alt="Католог с мебелью" />
      <h1 className={styles.hero_text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis sit,
        debitis sapiente omnis, cum quis cumque repellat, architecto obcaecati
        ipsum quas deleniti sint optio impedit necessitatibus reiciendis itaque
        eaque ad?
      </h1>
    </div>
  );
};
export default HeroBaner
