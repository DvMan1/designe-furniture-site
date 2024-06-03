import HeroBaner from "./HeroBaner/HeroBaner";
import Projects from "./Projects/Projects.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import styles from "./Home.module.scss";
import FormCallback from "./FormCallback/FormCallback.jsx";
import Comments from "./Comments/Commenst.jsx";
import Footer from "./Footer/Footer.jsx";
import Partners from "./Partners/Partners.jsx";


const Home = () => {
  return (
    <div className={styles.home_box}>
      <HeroBaner />
      <Projects />
      <AboutUs />
      <FormCallback />
      <Partners/>
      <Comments />
      <Footer />
    </div>
  );
};
export default Home;
