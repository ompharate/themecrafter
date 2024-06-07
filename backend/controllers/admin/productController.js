import { escapeRegex } from "../../config/utils.js";
import Product from "../../models/productSchema.js";

const addProduct = async (req, res) => {
  const { name, description, imageUrl, demoUrl, downloadUrl, price, tags } =
    req.body;

  if (
    !name ||
    !description ||
    !imageUrl ||
    !demoUrl ||
    !downloadUrl ||
    !price ||
    !tags
  ) {
    return res.status(500).json({
      message: "all fields are required",
    });
  }

  const product = new Product({
    name: name,
    price: price,
    description: description,
    imageUrl: imageUrl,
    demoUrl: demoUrl,
    downloadUrl: downloadUrl,
    tags: tags,
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
  const key = req.query.key;
  if (key=="null") {    
    const products = await Product.find();
    return res.status(200).json({
      message: "Product fetched successfully",
      products: products,
    });
  } else {
  
    const escapedQuery = escapeRegex(key);
    const regex = new RegExp(escapedQuery, "i");
    const products = await Product.find({ name: { $regex: regex } });
    return res.status(200).json({
      message: "Product fetched successfully",
      products: products,
    });
  }
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
