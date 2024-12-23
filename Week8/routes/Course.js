const {Router}=require("express")
const { purchaseModel, courseModel } = require("../db")
const courseRouter=Router()
const userMiddleware = require("../middleware/user")

courseRouter.post("/purchase", userMiddleware, async function(req,res){
    const userId = req.userId
    const courseId = req.body.courseId

    await purchaseModel.create({
        userId,
        courseId
    })
    res.json({
        message: "Course Purchased"
    })
})

courseRouter.get("/preview", async function(req,res){
    const course = await courseModel.find({})
    console.log(course)
    res.json({
        "courses" : course
    })

})

module.exports = courseRouter