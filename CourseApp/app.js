const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")
dotenv.config({path:path.join(__dirname,'config','config.env')})
const dbConnection = require("./config/connectDb")
dbConnection();


app.use(cors({
    origin:"http://localhost:8080",
    methods:["GET,POST,PUT,PATCH,DELETE"],
    credentials:true
}))

app.use(express.json)

app.listen(process.env.PORT, ()=>{
    console.log(`Server connected on port ${process.env.PORT} in ${process.env.NODE_ENV}`  )
})


