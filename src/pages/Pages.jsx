import NavigationBar from "../components/NavigationBar/NavigationBar";
import Home from "../components/Home/Home";
import styles from"./Pages.module.scss"
import { Routes,Route } from "react-router-dom";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import CallbackButton from "../components/CallbackButton/CallbackButton"


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
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </>
  );
};

export default Pages;
