import styles from "./NavigationBar.module.scss";
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MainLogo from "./MainLogo/MainLogo";
import icon from "../../../../public/symbol-defs.svg"
import classNames from 'classnames';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: white;
  }
  &.active::after {
    scale: 1;
  }
`;

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(styles.menu_box);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  const handleScroll = () => {
    const scrollY = window.scrollY;
  if (scrollY > 100) {
   return setIsActive(styles.menu_box_active);

  } else {
   return setIsActive(styles.menu_box);
  }
};

useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);



  return (
    <div className={isActive}>
      <MainLogo></MainLogo>
      
      <nav className={styles.nav_box}>
        
        <button type="button" className={classNames(styles.menu_button, { [styles.is_open]: isOpen })} onClick={toggleMenu}>
          <svg width="40px"height="40px">
            <use className={styles.icon_menu} href={`${icon}#icon-burger`}></use>
            <use className={styles.icon_cross} href={`${icon}#icon-cross`}></use>
          </svg>
        </button>
        <div className={ classNames(styles.menu_conteiner,{ [styles.is_open]: isOpen })}><StyledLink to="/" className={styles.nav_link}>
          Home
        </StyledLink>
        <StyledLink to="/portfolio" className={styles.nav_link}>
          Portfolio
        </StyledLink>
        <StyledLink to="/about" className={styles.nav_link}>
          About
        </StyledLink>
        <StyledLink to="/cost-calculator" className={styles.nav_link}>
          Cost Calculator
        </StyledLink>
        <StyledLink to="/contact" className={styles.nav_link}>
          Contact
        </StyledLink> </div>
      </nav>
      
    </div>
  );
};
export default NavigationBar;
