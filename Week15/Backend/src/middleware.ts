import {Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken"
import {JWT_PASSWORD} from "./config"

const userMiddleWare = (req: Request, res:Response, next:NextFunction)=> {
    const header = req.headers["authorization"]
    //No id is present in jwt explicitly. So, added and given as string
    const decode = jwt.verify(header as string, JWT_PASSWORD) as {id:string}
    if(decode) {
        req.userId = decode.id
        next()
    } else {
        res.status(400).json({
            message:"You're not logged in"
        })
    }
}

export default userMiddleWare