import { escapeRegex } from "../../config/utils.js";
import Product from "../../models/productSchema.js";

const addProduct = async (req, res) => {
  const {
    title,
    description,
    price,
    category,
    previewLink,
    screenShots,
    file,
  } = req.body;

  const product = new Product({
    name: title,
    price: price,
    description: description,
    imageUrl:
      screenShots |
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjHha3TakqXp-HgwYjsWPEp1AnG7znGSLCQ&s",
    demoUrl: previewLink,
    downloadUrl:
      file |
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjHha3TakqXp-HgwYjsWPEp1AnG7znGSLCQ&s",
    category: category | "Modern Theme",
  });

  product.save();

  return res.status(201).json({
    message: "Product added successfully",
  });
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  const product = await Product.findByIdAndDelete(id);

  return res.status(201).json({
    message: "Product deleted successfully",
  });
};

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  return res.status(200).json({
    message: "Product fetched successfully",
    products: products,
  });
};

const getProductsByKey = async (req, res) => {
  const key = req.query.q;
  console.log(key);
  const product = await Product.find({
    $or: [
      { category: { $regex: key, $options: "i" } }, // case-insensitive search in title
      { name: { $regex: key, $options: "i" } }, // case-insensitive search in content
      { description: { $regex: key, $options: "i" } }, // case-insensitive search in content
    ],
  });
  return res.status(200).json({
    message: "Product fetched successfully",
    product: product,
  });
};

const getProductById = async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findById(productId);
  return res.status(200).json({
    message: "Product fetched successfully",
    product: product,
  });
};

export {
  addProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductsByKey,
};
