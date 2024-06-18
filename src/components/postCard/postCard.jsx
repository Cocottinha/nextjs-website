import Image from "next/image"
import styles from "./postCard.module.css"

const PostCard = ({post}) => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                {post.img && <div className={styles.imgCont}>
                    <Image src={post.img} alt="" fill className={styles.img}/>
                </div>}
                <span className={styles.date}>{post.createdAt.toString().slice(0,10)}</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.tipo}</h1>
                <p className={styles.desc}>{post.desc}</p>
                
            </div>
        </div>
    )
}

export default PostCard