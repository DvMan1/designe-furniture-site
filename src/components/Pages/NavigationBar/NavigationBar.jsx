import styles from "./NavigationBar.module.scss";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MainLogo from "./MainLogo/MainLogo";
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
  return (
    <div className={styles.menu_box}>
      <MainLogo></MainLogo>
      <nav className={styles.nav_box}>
        <StyledLink to="/" className={styles.nav_link}>
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
        </StyledLink>
      </nav>
    </div>
  );
};
export default NavigationBar;
