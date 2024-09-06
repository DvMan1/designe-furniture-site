import styles from "./Comment.module.scss";

const Comment = ({ name, text, role, avatar }) => {
  return (
    <div className={styles.comment_box}>
      <div className={styles.comment_wrapper}>
        <div className={styles.comment_avatar_box}>
          <img className={styles.comment_avatar} src={avatar} alt={name} />
          <div className={styles.title_box}>
            <h2 className={styles.comment_title}>{name}</h2>
            <h3 className={styles.comment_role}>{role}</h3>
          </div>
        </div>

        <div className={styles.text_box}>
          <p className={styles.comment_text}>{text}</p>
        </div>
      </div>
    </div>
  );
};
export default Comment;
