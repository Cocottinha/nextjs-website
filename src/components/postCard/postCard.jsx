import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgCont}>
                    <Image src="/fig1.jpg" alt="" fill className={styles.img}/>
                </div>
                <span className={styles.date}>01.01.2003</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Title</h1>
                <p className={styles.desc}>Desc</p>
                <Link className={styles.link} href="/blog/post">Read More</Link>
            </div>
        </div>
    )
}

export default PostCard