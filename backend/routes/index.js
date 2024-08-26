import express from "express";
import isUser from "../middlewares/userAuth.js";
import authRouter from "./authRoutes.js";
import orderRouter from "./orderRoutes.js";
import productRouter from "./productRoutes.js";
import paymentRouter from "./paymentRoutes.js";
import Product from "../models/productSchema.js";
import User from "../models/userSchema.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("server is uppp!!!!!!");
});
router.get("/stats", async (req, res) => {
  const totalProducts = await Product.countDocuments();
  const totalUsers = await User.countDocuments();
  res.json({
    totalUsers: totalUsers,
    totalProfit: 34000,
    totalProducts: totalProducts,
    totalViews: 2394,
  });
});
router.use("/auth", authRouter);
router.use("/product", productRouter);
router.use("/order", orderRouter);
router.use("/payment", paymentRouter);

export default router;
