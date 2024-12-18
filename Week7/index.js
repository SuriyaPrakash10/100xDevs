const express = require("express");
const { UserModel, TodoModel } = require("./Db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "tyughj";
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const {z} = require("zod")

mongoose.connect("mongodb://localhost:27017/");
app.use(express.json());

app.post("/signup", async function (req, res) {

    const reqBody = z.object({
        email:z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(30)
    })

// const parsedate = req.body.parse(req.body)
    const parseDatawithSuccess = reqBody.safeParse(req.body)

    if(!parseDatawithSuccess.success) {
        res.json({
            message:"Incorret format",
            error: parseDatawithSuccess.error
        })
        return
    }

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
let errorThrow =false

try{
    const hash = await bcrypt.hash(password,5)

    await UserModel.create({
      email: email,
      password: hash,
      name: name,
    });
} catch(e) {
    res.json({
        message: "User exists"
    })

    errorThrow=true
}

 if(!errorThrow) {
    res.json({
        message: "You are logged in",
      });
 }
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const user = await UserModel.findOne({
    email: email
  });

  if(!user) {
    res.json({
        message: "Unavailable"
    })
    return
  }

  const passMatch =await bcrypt.compare(password, user.password)

  if (passMatch) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET
    );
    res.json({
      message: token,
    });
  } else {
    res.status(401).json({
      message: "Incorrect Creds",
    });
  }
});

app.post("/todo", auth,async function (req, res) {
    const userId = req.userId
    const title = req.body.title

    await TodoModel.create ({
        title,
        userId
    })

    res.json({
        userId: userId
    })
});

app.get("/todos", auth, async function (req, res) {
    const userId = req.userId
    const todo = await TodoModel.find ({
        userId: userId
    })

    res.json({
        todo
    })
});

function auth (req, res,next) {
    const token = req.headers.token;
    const decodeData = jwt.verify(token,JWT_SECRET)

    if(decodeData) {
        req.userId = decodeData.id
        next()
    } else {
        res.status(403).json({
            message:"Incorrect Creds"
        })
    }
}

app.listen(3000);
