import Image from "next/image"
import styles from "./page.module.css"
import PostUser from "@/components/postUser/postUser"
import { Suspense } from "react"
import {getPost} from "@/lib/data"
import {App} from "@/components/charts/chart"

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`,{next:{revalidate:3600}});

    if(!res.ok){
        throw new Error ("Wrong")

    }
    return res.json();
};

export const generateMetadata = async ({params}) => {
    const {slug} = params

    const post = await getPost(slug)

    return{
        title:post.title,
        description:post.desc,
    }
  }

const SinglePostPage = async ({ params }) => {

    const { slug } = params;
    const post = await getData(slug)
    //const post = await getPost(slug)

    return (
        <div className={styles.container}>
            {post.img && <div className={styles.imgContainer}>
                <Image src={post.img} alt="" fill className={styles.img} />
            </div>}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    {post && 
                    (<Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId = {post.userId}></PostUser>
                    </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Date</span>
                        <span className={styles.detailValue}>{post.createdAt.toString().slice(0,10)}</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.desc}
                </div>
                <div>
                    <App/>
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage