import express from "express";
import {
  addOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
} from "../controllers/common/orderController.js";
const router = express.Router();
router.get("/user/:id",getAllOrders);
router.post("/add-order", addOrder);
router.post("/delete-order/:id", deleteOrder);
router.get("/:id", getOrderById);
export default router;
