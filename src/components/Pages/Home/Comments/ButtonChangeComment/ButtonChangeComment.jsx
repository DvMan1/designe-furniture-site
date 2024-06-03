import React from "react";
import styles from "./ButtonChangeComment.module.scss"

const ButtonChangeComment = ({ index, curentIndex, setIndex, commentsLength }) => {

  const changeIndex = () => {
    const newIndex = (curentIndex - 1 + index + commentsLength) % commentsLength + 1;
    setIndex(newIndex);
  };

  return (
    <button  className= {styles.button_comment}type="button" onClick={changeIndex}>
      {index > 0 ? "Next" : "Prev"}
    </button>
  );
};

export default ButtonChangeComment;
