import styles from "./NavigationBar.module.scss";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MainLogo from "./MainLogo/MainLogo";
import classNames from "classnames";
import { FaBars, FaCross } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: black;
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
      <div className={styles.nav_wrapper}>
        <MainLogo></MainLogo>

        <nav className={styles.nav_box}>
          <button
            type="button"
            className={classNames(styles.menu_button, {
              [styles.is_open]: isOpen,
            })}
            onClick={toggleMenu}
          >
            <FaBars className={styles.icon_menu} size={40} />
            <MdClose className={styles.icon_cross} size={50} />
          </button>
          <div
            className={classNames(styles.menu_conteiner, {
              [styles.is_open]: isOpen,
            })}
          >
            <StyledLink to="/" className={styles.nav_link}>
              Home
            </StyledLink>
            <StyledLink to="/portfolio" className={styles.nav_link}>
              Portfolio
            </StyledLink>
            <StyledLink to="/about" className={styles.nav_link}>
              About
            </StyledLink>
            <StyledLink to="/contact" className={styles.nav_link}>
              Contact
            </StyledLink>{" "}
          </div>
        </nav>
      </div>
    </div>
  );
};
export default NavigationBar;
