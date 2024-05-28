import styles from "./Example.module.scss";
const Example = ({ text, icon }) => {
  return (
    <div className={styles.example_box}>
      <img className={styles.example_img} src={icon} alt={text} />
      <div className={styles.example_shadow}></div>
      <h2 className={styles.example_title}>{text}</h2>
    </div>
  );
};
export default Example;
