import NavigationBar from "./NavigationBar/NavigationBar";
import Home from "./Home/Home";
import styles from"./Pages.module.scss"
import { Routes,Route } from "react-router-dom";
import Portfolio from "./Portfolio/Portfolio";
import About from "./About/About";
import CostCalculator from "./CostCalculator/CostCalculator";
import Contact from "./Contact/Contact";
import CallbackButton from "./CallbackButton/CallbackButton"


const Pages = () => {
  return (
    <>
      <NavigationBar/>
      <CallbackButton/>
      <div className={styles.page_box}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio"element={<Portfolio/>}/>
          <Route path="/about"element={<About/>}/>
          <Route path="/cost-calculator"element={<CostCalculator/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  );
};

export default Pages;
