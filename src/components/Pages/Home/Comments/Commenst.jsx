import { useState } from "react";
import styles from "./Commenst.module.scss";
import Comment from "./Comment/Comment";
import commentsData from "../../../../data/comments.json";
import ButtonChangeComment from "./ButtonChangeComment/ButtonChangeComment";
const Comments = () => {
  const [curentComment, setComment] = useState(1);
  const commentsLength = commentsData.comments.length;
  const commentFirst = commentsData.comments.find(
    (c) => c.id === curentComment
  );
  const commentSecond = commentsData.comments.find(
    (c) =>
      c.id === ((curentComment - 1 + 1 + commentsLength) % commentsLength) + 1
  );

  return (
    <div className={styles.comments_box}>
      <div className={styles.comments_contener}>
        <div className={styles.Prev_button_contener}>
          <ButtonChangeComment
            index={-2}
            curentIndex={curentComment}
            setIndex={setComment}
            commentsLength={commentsLength}
          />
        </div>
        <Comment name={commentFirst.name} text={commentFirst.comment} />
        {commentSecond.id !== 1 && (
          <Comment name={commentSecond.name} text={commentSecond.comment} />
        )}
        <div className={styles.Next_button_contener}>
          <ButtonChangeComment
            index={2}
            curentIndex={curentComment}
            setIndex={setComment}
            commentsLength={commentsLength}
          />
        </div>
      </div>
    </div>
  );
};
export default Comments;
