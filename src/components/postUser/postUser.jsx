import styles from "@/components/postUser/postUser.module.css"

const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { next: { revalidate: 3600 } })

    if (!res.ok) {
        throw new Error("Wrong!")
    }
    return res.json()
}

const PostUser = async ({userId}) => {

    const user = await getData(userId)

    return(
        <div className={styles.container}>
                        <span className={styles.title}>Author</span>
                        <span className={styles.username}>{user.username}</span>
                    </div>
    )
}

export default PostUser