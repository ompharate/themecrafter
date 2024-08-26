import express from "express";
import isUser from "../middlewares/userAuth.js";
import authRouter from "./authRoutes.js";
import orderRouter from "./orderRoutes.js";
import productRouter from "./productRoutes.js";
import paymentRouter from "./paymentRoutes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("server is uppp!!!!!!");
});
router.get("/stats", (req, res) => {
  res.json({
    totalUsers: 400,
    totalProfit: 34000,
    totalProducts: 130,
    totalViews: 2324994,
  });
});
router.use("/auth", authRouter);
router.use("/product", productRouter);
router.use("/order", isUser, orderRouter);
router.use("/payment", paymentRouter);

export default router;
