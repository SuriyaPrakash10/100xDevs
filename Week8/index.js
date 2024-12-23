require('dotenv').config()

const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const JWT_SECURITY = "ABCDEF"
const userRouter=require("./routes/User")
const courseRouter=require("./routes/Course")
const adminRouter=require("./routes/admin")
const mongoose = require("mongoose")

app.use(express.json())
app.use("/user",userRouter)
app.use("/course",courseRouter)
app.use("/admin",adminRouter)


async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
    console.log("reached")
}

main()
