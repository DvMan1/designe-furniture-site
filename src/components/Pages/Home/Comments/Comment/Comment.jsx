import styles from "./Comment.module.scss"

const Comment =({name,text})=>{
    return(<>
    <h2 className={styles.comment_title}>Name:{name}<p className={styles.comment_text}>{text}</p></h2>
    </>)
}
export default Comment