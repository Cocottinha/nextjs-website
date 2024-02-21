"use server"
import { revalidatePath } from "next/cache"
import { connectToDB } from "./connectToDB"
import { Post,User } from "./models"
import { signIn, signOut } from "./auth"
import { options } from "@/components/charts/chart"

export const addPost = async(formData)=>{

    //const title = formData.get("title")
    //const desc = formData.get("desc")
    //const slug = formData.get("slug")

    const {title, desc, slug, userId} = Object.fromEntries(formData)

    try {
        connectToDB();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId
        })
        await newPost.save()
        console.log("Saved to DB")
        revalidatePath("/blog")
    } catch (error) {
        console.log(error)
        return{
            error:"Algo deu errado!"
        }
    }
 }

 export const deletePost = async(formData)=>{

    //const title = formData.get("title")
    //const desc = formData.get("desc")
    //const slug = formData.get("slug")

    const {id} = Object.fromEntries(formData)

    try {
        connectToDB();
        await Post.findByIdAndDelete(id)
        console.log("Deleted from DB")
        revalidatePath("/blog")
    } catch (error) {
        console.log(error)
        return{
            error:"Algo deu errado!"
        }
    }
 }

export const handleGithubLogin = async () => {
    "use server"
    await signIn("github", { redirectTo:"/"})
}
export const handleLogout = async () => {
    "use server"
    await signOut()
}