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
import Razorpay from "razorpay";
import paymentRouter from "./routes/paymentRotue.js";

dotenv.config({
  path: ".env",
});
export const instance = new Razorpay({
  key_id: process.env.razorpay_id,
  key_secret: process.env.key_secret,
});

const app = express();

const corsOptions = {
  origin: "https://themecrafter.vercel.app",
  credentials: true,
};
app.use(cors(corsOptions));
connectionToMongoDb();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello world !!");
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/product", isUser, productRoute);
app.use("/api/v1/order", isUser, orderRouter);
app.use("/api/v1/payment", paymentRouter);

app.use(function (error, req, res, next) {
  res.status(error.status || 500).json({
    message: error.message,
    status: error.status || 500,
  });
});

export default app;
