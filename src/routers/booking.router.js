import express from "express";
import { bookingController } from "../controllers/booking.controller.js";

const bookingRouter = express.Router();

bookingRouter.get("/", bookingController.findAll);
bookingRouter.get("/:id", bookingController.findOne);
bookingRouter.post("/", bookingController.create);
bookingRouter.put("/:id", bookingController.update);
bookingRouter.delete("/:id", bookingController.delete);

export default bookingRouter;
