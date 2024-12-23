const jwt = require("jsonwebtoken")
const {JWT_USER_PASSWORD} = require("../config")

function usermiddleware(req, res,next) {
    const token = req.headers.token;
    const decoded = jwt.toke.verify(token,JWT_USER_PASSWORD)

    if(decoded) {
        req.userId = decoded.id;
        next()
    } else {
        res.status(400).json({
            message:"You are not signed in"
        })
    }
}

module.exports = usermiddleware;