import styles from "./Comment.module.scss";

const Comment = ({ name, text }) => {
  return (
    <div className={styles.comment_box}>
        <div className={styles.title_box}>
        <h2 className={styles.comment_title}>{name}</h2>
        </div>
     
        <div className={styles.text_box}>
        <p className={styles.comment_text}>{text}</p>
        </div>
    </div>
  );
};
export default Comment;
