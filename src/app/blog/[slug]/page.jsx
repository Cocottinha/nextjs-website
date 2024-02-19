import Image from "next/image"
import styles from "./page.module.css"
import PostUser from "@/components/postUser/postUser"
import { Suspense } from "react"

const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { next: { revalidate: 3600 } }, {cache:"no-store"})

    if (!res.ok) {
        throw new Error("Wrong!")
    }
    return res.json()
}

const SinglePostPage = async ({ params }) => {

    const { slug } = params;

    const post = await getData(slug)

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/fig1.jpg" alt="" fill className={styles.img} />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar}
                        src="/fig1.jpg"
                        alt=""
                        height={50}
                        width={50}
                    />
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId = {post.userId}></PostUser>
                    </Suspense>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Date</span>
                        <span className={styles.detailValue}>01.01.2003</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage