import styles from "./Comment.module.scss"

const Comment =({className,name,text})=>{
    return(<div className={className}>
    <h2 className={styles.comment_title}>Name:{name}<p className={styles.comment_text}>{text}</p></h2>
    </div>)
}
export default Comment