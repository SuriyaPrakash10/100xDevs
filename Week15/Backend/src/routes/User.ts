import { Router } from "express";
import { userModel } from "../db";
import jwt from "jsonwebtoken";
import {JWT_PASSWORD} from "../config"

const userRoute = Router();

userRoute.post("/signUp", async function (req, res) {
  const { username, password } = req.body;
  try {
    await userModel.create({
      userName: username,
      password: password,
    });

    res.status(200).json({
      message: "You're signed in",
    });
  } catch (e) {
    res.status(400).json({
      message: "User already exists",
    });
  }
});

userRoute.post("/signIn", async function (req, res) {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    userName: username,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_PASSWORD
    );

    res.status(200).json({
      message:token,
    });
  } else {
    res.status(400).json({
      message: "Bad Request",
    });
  }
});

export default userRoute;
