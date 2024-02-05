import Image from "next/image"
import styles from "./page.module.css"

const SinglePostPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/fig1.jpg" alt="" fill className={styles.img}/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar}
                        src="/fig1.jpg"
                        alt=""
                        height={50} 
                        width={50}
                    />
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Lab.Move André R. P.</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Date</span>
                        <span className={styles.detailValue}>01.01.2003</span>
                    </div>
                </div>
                <div className={styles.content}>
                    Vrau?aa
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage