import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductsByKey,
} from "../controllers/admin/productController.js";
import isAdmin from "../middlewares/adminAuth.js";

const router = express.Router();
router.get("/", getAllProducts);
router.get("/search", getProductsByKey);
router.get("/detail/:id", getProductById);
router.post("/add-product", isAdmin, addProduct);
router.post("/delete-product/:id", isAdmin, deleteProduct);
export default router;
