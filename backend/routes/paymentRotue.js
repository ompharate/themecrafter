import express from "express";
import { checkout, paymentVerification } from "../controllers/payment/paymentController.js";
const router = express.Router();


router.post("/checkout",checkout);
router.post("/paymentverification",paymentVerification);

export default router;