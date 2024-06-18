import PostCard from "@/components/postCard/postCard"
import styles from "@/app/blog/blog.module.css"
import Link from "next/link";
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog",{next:{revalidate:3600}});

    if(!res.ok){
        throw new Error ("Wrong")

    }
    return res.json();
};

const Blog = async () =>{

    const posts = await getData();

    return(
        <div className={styles.container}>
            <Link href={"/addPost"}>a</Link>
            {posts.map((post) => (
                <div className={styles.cont} key={post.id}>
                    <PostCard post={post}/>
                </div>
            ))}
            
        </div>
    )
}
export default Blog