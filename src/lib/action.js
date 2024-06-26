"use server"
import { revalidatePath } from "next/cache"
import { connectToDB } from "./connectToDB"
import { Post,User, Arquivo } from "./models"
import { signIn, signOut } from "./auth"
import bcrypt from "bcryptjs"

export const addPost = async(prevState, formData)=>{

    const {tipo, atividade, desc, hora, userId, arquivo} = Object.fromEntries(formData)

    try {
        connectToDB();
        const newArquivo = new Arquivo({
            diretorio:arquivo.name
        })
        await newArquivo.save()
        const newPost = new Post({
            tipo, atividade, desc, hora, userId, arquivo:arquivo.name
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

export const handleLogout = async () => {
    "use server"
    await signOut()
}
export const register = async (previousState, formData)=>{
    const {username, email, password, passwordRepeat} = Object.fromEntries(formData)

    if(password !== passwordRepeat){return {error:"Password does not match!"}}
    try{
        connectToDB()

        const user = await User.findOne({username})
        const mail = await User.findOne({email})

        if(user){
            return {error:"Username already exists!"}
        }
        if(mail){
            return {error:"Email already exists!"}
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        
        const newUser = new User({
            username,
            email,
            password:hashedPassword,
        })
        await newUser.save()
        console.log("saved to db")

        return {success:true}
    }
    catch(err){
        console.log(err)
        return{error: "Something wrong"}
    }
}
export const login = async (prevState, formData)=>{
    const {username, password} = Object.fromEntries(formData)

    try{
        await signIn("credentials",{username,password})
    }
    catch(err){
        console.log(err)
        if(err.message.includes("CredentialsSignin")){
            return{error: "Username or Password invalid!"}
        }
        throw err
    }
}