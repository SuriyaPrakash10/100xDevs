import { contentModel } from "../db";
import { Router } from "express";
import  userMiddleWare from "../middleware"

const contentRouter = Router();

contentRouter.post("",userMiddleWare ,async function (req, res) {
  const { links, types, titles, tags } = req.body;
  await contentModel.create({
    link: links,
    type: types,
    title: titles,
    tag: tags,
  });

  res.status(200).json({
    messaege: "Content's saved",
  });
});


contentRouter.get("", userMiddleWare, async function(req,res) {
  const userId = req.userId;
  const content = await contentModel.find({
    userId:userId
  }).populate("userId", "userName")
  res.json({
    content
  })
})


contentRouter.delete("", userMiddleWare, async (req,res)=> {
  const contentId = req.body.contentId;

  contentModel.deleteMany({
    contentId : contentId,
    userId: req.body.userId
  })

  res.status(200).json({
    message: "Content deleted"
  })
}
)
export default contentRouter;



// delete
// post-share