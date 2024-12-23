const {Router}=require("express")
const userRouter=Router()
const {userModel, purchaseModel} = require("../db")
const jwt = require("jsonwebtoken")
const {JWT_USER_PASSWORD} = require("../config")
const usermiddleware = require("../middleware/user")


userRouter.post("/signup",async function(req,res){
    const {email,password,firstName,lastName}= req.body;

    //TODO zod, bcrypt, try catch
    await userModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })

    res.json({
        message:"You are signed in"
    })

})

userRouter.post("/signin",async function(req,res){
    const {email, password} = req.body
     const user = await userModel.findOne({
        email:email,
        password:password
    })

    if(user) {
        const token = jwt.sign({
            id:user._id
        }, JWT_USER_PASSWORD)
        res.json({
            token: token
        })
    } else {
        res.status(400).json({
            message: "Signup Successful"
        })
    }

    
})

userRouter.get("/purchases", usermiddleware, async function(req,res){

    const userId = req.userId;
    const purchase = await purchaseModel.find({
        userId
    })
    res.json({
        "purchase" : purchase
    })
})

module.exports = userRouter