import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { connectionToMongoDb } from "../config/database.js";
import routes from "../routes/index.js"; 
import Razorpay from "razorpay";

dotenv.config({
  path: ".env",
});

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.KEY_SECRET,
});

const app = express();

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
connectionToMongoDb();

app.use("/api/v1", routes);  

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
    status: error.status || 500,
  });
});

export default app;