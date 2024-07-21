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

export const instance = new Razorpay({
  key_id: "rzp_test_nRsfAul0gFmA3M",
  key_secret: "mpxjpZAjKqm8YvuAjUHKFruC",
});

const app = express();

dotenv.config({
  path: ".env",
});

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

// Routes
app.get("/", (req, res) => {
  res.send("Hello world");
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

// Export the app instance for Vercel
export default app;
