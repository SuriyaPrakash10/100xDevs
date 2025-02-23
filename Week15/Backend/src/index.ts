// npm install -D typescript

// npx tsc --init

// npm i express
// npm install -D @types/express
// npm i mongoose
// npm install -D @types/ jsonwebtoken

import express from "express"
import dotenv from  "dotenv"
import mongoose from "mongoose"
import userRouter from "./routes/User"
import linkRouter from "./routes/Link"
import contentRouter from "./routes/Content"
import {MONGO_URL} from "./config"

const app = express()
app.use(express.json())
app.use("/user", userRouter)
app.use("/content", contentRouter)
app.use("/share", linkRouter)


dotenv.config()
async function main() {
    await mongoose.connect(MONGO_URL)
    app.listen(3000)
    console.log("DB connected")
}

main()
