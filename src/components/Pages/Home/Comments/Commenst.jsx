import styles from "./Commenst.module.scss";
import Comment from "./Comment/Comment";
const Comments = () => {
  return (
    <div className={styles.comments_box}>
      <Comment name="Ruslan" text="babababbabababbab" />
      <Comment name="Ruslan" text="babababbabababbab" />
      <Comment name="Ruslan" text="babababbabababbab" />
      <Comment name="Ruslan" text="babababbabababbab" />
    </div>
  );
};
export default Comments;
