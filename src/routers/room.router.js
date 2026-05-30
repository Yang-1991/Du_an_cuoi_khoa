import express from "express";
import { roomController } from "../controllers/room.controller.js";

const roomRouter = express.Router();

roomRouter.get("/", roomController.findAll);
roomRouter.get("/:id", roomController.findOne);
roomRouter.post("/", roomController.create);
roomRouter.put("/:id", roomController.update);
roomRouter.delete("/:id", roomController.delete);

export default roomRouter;
