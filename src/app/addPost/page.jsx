import styles from "./addPost.module.css"
import PostForm from "@/components/postForm/postForm";
import { auth } from "@/lib/auth";

const AddPost = async() => { 
    const session = await auth()
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Add Post</h1>
                <PostForm userId={session.user.id}/>
            </div>
            
        </div>
    )
};

export default AddPost;