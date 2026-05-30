import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import rootRouter from "./src/routers/root.router.js";
import { appError } from "./src/common/helpers/app-error.helper.js";
import { logApi } from "./src/common/middlewares/log-api.middleware.js";
import { PORT } from "./src/common/constant/app.constant.js";
import { swaggerDocument } from "./src/common/swagger/init.swagger.js";
import { initSocket } from "./src/common/socket/init.socket.js";
import "./src/models/airbnb.model.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(logApi);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json();
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", rootRouter);
app.use(appError);

const httpServer = initSocket(app);

const server = httpServer.listen(PORT, () => {
  console.log(`Server online at port: ${PORT}`);
});

server.requestTimeout = 0;
