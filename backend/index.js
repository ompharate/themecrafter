import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import productRoute from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoutes.js";
import { connectionToMongoDb } from "./config/database.js";
import bodyParser from "body-parser";
import isUser from "./middlewares/userAuth.js";
const app = express();

dotenv.config({
  path: ".env",
});
connectionToMongoDb();
app.use(cors());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello server is running");
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/product", isUser, productRoute);
app.use("/api/v1/order", isUser, orderRouter);

app.use(function (error, req, res, next) {
  res.json({
    message: error.message,
    status: error.status || 500,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
