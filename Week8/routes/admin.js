const {Router}=require("express")
const adminRoute = Router()
const {adminModel} = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_ADMIN_PASSWORD } = require("../config")
const adminMiddleware = require("../middleware/admin")
const {courseModel} = require("../db")

adminRoute.post("/signin", async function(req,res){
    const {email, password} = req.body
    const admin = await adminModel.findOne({
       email:email,
       password:password
   })

   if(admin) {
       const token = jwt.sign({
           id:admin._id
       }, JWT_ADMIN_PASSWORD)
       res.json({
           token: token
       })
   } else {
       res.status(400).json({
           message: "Invalid Creds"
       })
   }

})

adminRoute.post("/signup", async function(req,res){

    const {email,password,firstName,lastName}= req.body;

    //TODO zod, bcrypt, try catch
    await adminModel.create({
        email:email,
        password:password,
        firstName:firstName,
        lastName:lastName
    })

    res.json({
        message:"You are signed in"
    })
})

adminRoute.post("/course", adminMiddleware, async function(req,res){
    const adminId = req.userId;
    const {title, description,imageUrl, price} =  req.body;
    const course = await courseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:adminId
    })
    res.json({
        message:"Course Added",
        courseId: course._id
    })

})

adminRoute.put("/course", adminMiddleware, async function(req,res){
    const adminId = req.userId;
    const {title, description,imageUrl, price,courseId} =  req.body;
    const course = await courseModel.updateOne({
        _id:courseId
    },{
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price
    })
    res.json({
        message:"Course updated",
        courseId: course._id
    })
})

adminRoute.get("/course", adminMiddleware,async function(req,res){
    const adminId = req.userId
    const course = await adminModel.find({
        creatorId:adminId
    })

    res.json({
        "course":course
    })
})


module.exports=adminRoute
