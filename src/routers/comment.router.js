import express from "express";
import { commentController } from "../controllers/comment.controller.js";

const commentRouter = express.Router();

commentRouter.get("/", commentController.findAll);
commentRouter.get("/:id", commentController.findOne);
commentRouter.post("/", commentController.create);
commentRouter.put("/:id", commentController.update);
commentRouter.delete("/:id", commentController.delete);

export default commentRouter;
