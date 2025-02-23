import { contentModel, linkModel, userModel } from "../db";
import { Router } from "express";
import userMiddleWare from "../middleware";
import { random } from "../Utils";

const linkRouter = Router();

linkRouter.post("/link", userMiddleWare, async (req, res) => {
  const share = req.body;
  if (share) {
    const linkExists = linkModel.findOne({
      userId: req.userId,
    });

    if (linkExists) {
      res.json({
        hash: linkExists,
      });
      return;
    }

    const hash = random(30);

    await linkModel.create({
      userId: req.userId,
      hash: hash,
    });

    res.json({
      hash,
    });
  } else {
    await linkModel.deleteOne({
      userId: req.userId,
    });

    res.json({
      message: "Link removed",
    });
  }
});

linkRouter.get("/link/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;

  const link = await linkModel.findOne({
    hash,
  });

  if (!link) {
    res.status(411).json({
      message: "Sorry incorrect input",
    });
    return;
  }

  const content = await contentModel.find({
    userId: link.userId,
  });

  console.log(link);
  const user = await userModel.findOne({
    _id: link.userId,
  });

  if (!user) {
    res.status(411).json({
      message: "user not found, error should ideally not happen",
    });
    return;
  }

  res.json({
    username: user.userName,
    content: content,
  });
});

export default linkRouter;
