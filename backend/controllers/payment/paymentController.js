import { instance } from "../../config/server.js";

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount) * 100,
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  return res.json({
    order,
  });
};

export const paymentVerification = (req, res) => {
  if (req.body) {
    return res.redirect(
      `${process.env.FRONTEND_URL}/paymentsuccess?reference=${req.body.razorpay_payment_id}`
    );
  }

  res.status(200).json({
    success: true,
    message: "Payment verified successfully",
  });
};
