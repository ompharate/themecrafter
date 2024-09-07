import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      ref: "User",
      required: true,
    },
    products: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
    totalPrice: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
