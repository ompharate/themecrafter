import Order from "../../models/orderSchema.js";

const addOrder = async (req, res) => {
  const { userId, products, totalPrice } = req.body;
  console.log(req.body);
  if (!userId || !products || !totalPrice) {
    return res.status(500).json({
      message: "all fields are required",
    });
  }

  try {
    const order = new Order({
      user: userId,
      products,
      totalPrice,
    });

    order.save();
    return res.status(201).json({
      message: "Order added successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

const deleteOrder = async (req, res) => {
  const orderId = req.params.id;
  await Order.findByIdAndDelete(orderId);
  return res.status(200).json({
    message: "Order deleted successfully",
  });
};

const getAllOrders = async (req, res) => {
  const orders = await Order.find({});
  return res.status(200).json({
    message: "Orders fetched successfully",
    data: orders,
  });
};

const getOrderById = async (req, res) => {
  const orderId = req.params.id;
  const order = await Order.findById(orderId);
  return res.status(200).json({
    message: "Order fetched successfully",
    data: order,
  });
};



export { addOrder, deleteOrder, getAllOrders ,getOrderById};
