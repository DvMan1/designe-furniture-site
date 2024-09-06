import styles from "./MainLogo.module.scss";
import { useNavigate } from "react-router-dom";
import { FaCircleHalfStroke } from "react-icons/fa6";

const MainLogo = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
 return (<div className={styles.logo_box}>
    <FaCircleHalfStroke className={styles.icon} onClick={onClick} />
  </div>)
};
export default MainLogo;
