import React from "react";
import styles from "./ButtonChangeComment.module.scss"

const ButtonChangeComment = ({ index, curentIndex, setIndex, commentsLength }) => {

  const changeIndex = () => {
    let newIndex = curentIndex + index;
  

    if (newIndex < 1) {
      newIndex = commentsLength; 
    } else if (newIndex > commentsLength) {
      newIndex = 1; 
    }
  
    setIndex(newIndex);
  };
  

  return (
    <button  className= {styles.button_comment}type="button" onClick={changeIndex}>
      {index > 0 ? ">" : "<"}
    </button>
  );
};

export default ButtonChangeComment;
