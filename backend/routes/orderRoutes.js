import express from "express";
import {
  addOrder,
  deleteOrder,
  getAllOrders,
  getOrderById,
} from "../controllers/common/orderController.js";
const router = express.Router();
router.get("/",getAllOrders);
router.post("/add-order", addOrder);
router.post("/delete-order/:id", deleteOrder);
router.post("/:id", getOrderById);
export default router;
