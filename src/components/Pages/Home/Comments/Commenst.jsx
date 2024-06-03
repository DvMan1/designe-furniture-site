import { useState } from "react";
import styles from "./Commenst.module.scss";
import Comment from "./Comment/Comment";
import commentsData from "../../../../data/comments.json"
import ButtonChangeComment from "./ButtonChangeComment/ButtonChangeComment";
const Comments = () => {
  const [curentComment,setComment] = useState(1)
  const comment = commentsData.comments.find(c => c.id === curentComment);
  const commentsLength = commentsData.comments.length;
  return (
    <div className={styles.comments_box}>
      <ButtonChangeComment index ={-1} curentIndex={curentComment} setIndex={setComment} commentsLength={commentsLength}/>
      <Comment name={comment.name} text={comment.comment} />
      <ButtonChangeComment index ={1} curentIndex={curentComment} setIndex={setComment} commentsLength={commentsLength}/>
    </div>
  );
};
export default Comments;
