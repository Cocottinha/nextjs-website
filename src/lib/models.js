import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        max:50
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    isAdmin:{
        type:Boolean,
        default:null
    },
},
{timestamps:true}
)

const postSchema = new mongoose.Schema({
    tipo:{
        type:String,
        required:true,
    },
    atividade:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    hora:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true
    },
    pendente:{
        type:Boolean,
        required:false
    },
    aprovado:{
        type:Boolean,
        required:false
    },
    arquivo:{
        type:String,
        required:true
    }
},
{timestamps:true}
)

const arquivoSchema = new mongoose.Schema({
    diretorio:{
        type:String,
        required:true
    },
},{timestamps:true})

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const Arquivo = mongoose.models?.Arquivo || mongoose.model("Arquivo", arquivoSchema);