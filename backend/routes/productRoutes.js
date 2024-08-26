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
router.post("/add-product", addProduct);
router.get("/delete-product/:id", deleteProduct);
export default router;
