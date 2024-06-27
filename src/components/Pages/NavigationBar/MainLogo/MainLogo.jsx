import icon from "../../../../../public/symbol-defs.svg";
import styles from "./MainLogo.module.scss";
import { useNavigate } from "react-router-dom";

const MainLogo = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
 return (<div className={styles.logo_box}>
    <svg className={styles.icon} onClick={onClick}>
      <use href={`${icon}#icon-logo`}></use>
    </svg>
  </div>)
};
export default MainLogo;
