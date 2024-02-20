import PostCard from "@/components/postCard/postCard"
import styles from "@/app/blog/blog.module.css"
import {getPosts} from "@/lib/data"

const Blog = async () =>{

    const posts = await getPosts();

    return(
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.cont} key={post.id}>
                    <PostCard post={post}/>
                </div>
            ))}
            
        </div>
    )
}
export default Blog