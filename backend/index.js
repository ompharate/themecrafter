// /backend/index.js

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

connectionToMongoDb();

export const instance = new Razorpay({
  key_id: "rzp_test_nRsfAul0gFmA3M",
  key_secret: "mpxjpZAjKqm8YvuAjUHKFruC",
});

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true,
};

app.use(cors(corsOptions));

// Routes
app.get("/", (req, res) => {
  res.send("Hello server is running");
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/product", isUser, productRoute);
app.use("/api/v1/order", isUser, orderRouter);
app.use("/api/v1/payment", paymentRouter);

// Error handling middleware
app.use(function (error, req, res, next) {
  res.status(error.status || 500).json({
    message: error.message,
    status: error.status || 500,
  });
});

export default (req, res) => {
  app(req, res);
};
