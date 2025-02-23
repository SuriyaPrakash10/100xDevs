import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    userName: {type: String, required:true, unique:true}, 
    password: {type: String, required:true}
})
const contentSchema = new Schema({
    link: {type: String, required:true},
    title: String,
    tags: [{type:mongoose.Types.ObjectId,ref:"Tag"}],
    userId:{type:mongoose.Types.ObjectId,ref:"User"}
})

const tagSchema = new Schema({
    title:{type: String, required:true, unique:true}
})

const linkSchema = new Schema ({
    hash: {type: String, required:true},
    userId:{type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
})


 export const userModel =mongoose.model("User", userSchema)
 export const contentModel = mongoose.model("Content", contentSchema)
 export const tagModel = mongoose.model("Tag", tagSchema)
 export const linkModel = mongoose.model("Link", linkSchema)

