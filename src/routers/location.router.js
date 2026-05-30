import express from "express";
import { locationController } from "../controllers/location.controller.js";

const locationRouter = express.Router();

locationRouter.get("/", locationController.findAll);
locationRouter.get("/:id", locationController.findOne);
locationRouter.post("/", locationController.create);
locationRouter.put("/:id", locationController.update);
locationRouter.delete("/:id", locationController.delete);

export default locationRouter;
