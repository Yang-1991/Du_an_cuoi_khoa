import express from "express";
import bookingRouter from "./booking.router.js";
import commentRouter from "./comment.router.js";
import locationRouter from "./location.router.js";
import roomRouter from "./room.router.js";
import userRouter from "./user.router.js";

const rootRouter = express.Router();

rootRouter.use("/bookings", bookingRouter);
rootRouter.use("/comments", commentRouter);
rootRouter.use("/locations", locationRouter);
rootRouter.use("/rooms", roomRouter);
rootRouter.use("/users", userRouter);

export default rootRouter;
