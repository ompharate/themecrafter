import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { connectionToMongoDb } from "../config/database.js";
import routes from "../routes/index.js";
import Razorpay from "razorpay";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
dotenv.config({
  path: ".env",
});

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
  },
});
export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_ID,
  key_secret: process.env.KEY_SECRET,
});

const app = express();

const corsOptions = {
  origin:[ process.env.FRONTEND_URL, process.env.ADMIN_FRONTEND_URL],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
connectionToMongoDb();
app.get("/generatePresignedUrl", async (req, res) => {
  const { filename, filetype } = req.query;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: filename,
    ContentType: filetype,
  });

  const url = await getSignedUrl(s3Client, command);
  res.json({ url });
});

app.use("/api/v1", routes);

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message,
    status: error.status || 500,
  });
});

export default app;
