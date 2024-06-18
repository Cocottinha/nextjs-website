"use client"
import styles from "./postForm.module.css"
import {useFormState} from "react-dom"
import { addPost } from "@/lib/action"
import { useState } from "react"

const PostForm = ({userId}) => {
    const [file, setFile] = useState()
    const [state, formAction] = useFormState(addPost, undefined)

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="tipo" name="tipo" />
            <input type="text" placeholder="atividade" name="atividade" />
            <input type="text" placeholder="descricao" name="desc" />
            <input type="text" placeholder="horas" name="hora" />            
            <input type="hidden" name="userId" value={userId}/>
            <input type="file" placeholder="arquivo" name="arquivo" onChange={(e) => setFile(e.target.files?.[0])}/>
            <button>Add</button>
            {state?.error && <p className={styles.error}>{state.error}</p>}
        </form>
    )
}
export default PostForm