const express = require('express');
const jwt = require('jsonwebtoken')

const app = express();
app.use(express.json());
const jwt_secret = "momomomomomomo"

const users=[];

function generateToken() {
    return Math.random().toString(36).substr(2);
}

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/public/index.html");
}) 

app.post("/signup", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username, 
        password:password
    })

    res.json({
        message:"You're Signed in"
    })
})

app.post("/signin", function(req,res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function(u) {
        if(u.username== username && u.password == password) {
            return true;
        } else {
            return false;
        }
    })

    if(foundUser) {
        // const token = generateToken();
        // foundUser.token=token;
        const token = jwt.sign({
            username:username
        }, jwt_secret)
        res.json({
            token:token
        })
    } else {
        res.status(403).send({
            message: "Invalid Username"
        })
    }
})

function auth(req,res,next) {
    const token = req.headers.token;
    try {
        const decodedInfo = jwt.verify(token, jwt_secret);
        const username = decodedInfo.username;
        if(decodedInfo.username) {
            req.username = username
            next()
        } else {
            res.json ({
                message: "You are not logged in"
            })
        }
    } catch (error) {
        res.status(401).send({
            message: "Invalid or expired token"
        });
    }
}

app.get("/me", auth, (req, res) => {

    const foundUser = users.find(u => u.username === req.username);
    if (foundUser) {
        res.json({
            message: "Success",
            user: {
                username: foundUser.username,
                password: foundUser.password
            }
        });
    } else {
        res.status(404).json({
            message: "User not found"
        });
    }
});

 
app.listen(3000); 