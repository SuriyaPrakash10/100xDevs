const { Schema, Model } = require("mongoose")

const mongoose = require('mongoose')
const schema = mongoose.schema
const ObjectId = mongoose.ObjectId


const User = new Schema ({
    email: {type: String, unique:true},
    password: String,
    name: String
})

const Todo = new Schema ({
    title:String,
    done: Boolean,
    userId:ObjectId
})

const UserModel = mongoose.model('user', User)
const TodoModel = mongoose.model('todo', Todo)

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}



