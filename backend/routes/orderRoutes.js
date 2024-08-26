import express from "express";
import {
  addOrder,
  deleteOrder,
  getAllOrders,
  getAllUserOrders,
  getOrderById,
} from "../controllers/common/orderController.js";
const router = express.Router();
router.get("/",getAllOrders);
router.get("/user/:id",getAllUserOrders);
router.post("/add-order", addOrder);
router.post("/delete-order/:id", deleteOrder);
router.get("/:id", getOrderById);
export default router;