import { useState } from "react";
import styles from "./Commenst.module.scss";
import Comment from "./Comment/Comment";
import commentsData from "../../../../data/comments.json";
import ButtonChangeComment from "./ButtonChangeComment/ButtonChangeComment";
import PaginationDots from "./PaginationDots/PaginationDots";
const Comments = () => {
  const [curentComment, setComment] = useState(1);
  const commentsLength = commentsData.comments.length;
  const commentFirst = commentsData.comments.find(
    (c) => c.id === curentComment
  );
  const commentSecond = commentsData.comments.find(
    (c) => c.id === curentComment + 1
  );
  const commentsPerPage = 2;
  const totalComments = commentsData.comments.length;
  const totalPages = Math.ceil(totalComments / commentsPerPage);

  const currentPage = Math.ceil(curentComment / commentsPerPage);

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
        <Comment name={commentFirst.username} text={commentFirst.comment} role={commentFirst.role} avatar={commentFirst.avatar} />
        {commentSecond && commentSecond.id !== 1 && (
          <Comment name={commentSecond.username} text={commentSecond.comment} role={commentSecond.role} avatar={commentSecond.avatar}/>
        )}
        <div className={styles.Next_button_contener}>
          <ButtonChangeComment
            index={2}
            curentIndex={curentComment}
            setIndex={setComment}
            commentsLength={commentsLength}
          />
        </div>
        <PaginationDots currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
};
export default Comments;
