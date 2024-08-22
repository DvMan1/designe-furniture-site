import React from "react";
import styles from "./ButtonChangeComment.module.scss"

const ButtonChangeComment = ({ index,  changeIndex }) => {


  

  return (
    <button  className= {styles.button_comment}type="button" onClick={changeIndex}>
      {index > 0 ? ">" : "<"}
    </button>
  );
};

export default ButtonChangeComment;
