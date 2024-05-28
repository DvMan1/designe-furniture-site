import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className= {styles.footer_box}>
      <ul>
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
