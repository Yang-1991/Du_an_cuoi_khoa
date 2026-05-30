import express from "express";
import { userController } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", userController.findAll);
userRouter.get("/:id", userController.findOne);
userRouter.post("/", userController.create);
userRouter.put("/:id", userController.update);
userRouter.delete("/:id", userController.delete);

export default userRouter;
