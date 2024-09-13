import styles from "./HeroBaner.module.scss";
import ContactButton from "./ContactButton/ContactButton.jsx";

const HeroBaner = () => {
  return (
    <div className={styles.hero_box}>
      <div className={styles.hero_wrapper}>
        <div className={styles.hero_title_wrapper}>
          <h1 className={styles.hero_title}>
            Mebelstone Furniture: Crafting Quality, Inspiring Spaces
          </h1>
        </div>

        <div className={styles.hero_text_wrapper}>
          <p className={styles.hero_text}>
            At Mebelstone, we believe in the power of design to create
            beautiful, functional spaces that enhance your home. Our furniture
            is made with high-quality materials and crafted with care to ensure
            durability and longevity.
          </p>
        </div>

        <ContactButton/>
      </div>
    </div>
  );
};
export default HeroBaner;
