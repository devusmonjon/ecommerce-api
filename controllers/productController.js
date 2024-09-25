const Product = require("../models/productModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

// Mahsulot qo'shish
exports.createProduct = async (req, res, next) => {
  try {
    const { name, description, pages, published, image } = req.body;
    const product = new Product({
      name,
      // price,
      description,
      image,
      // countInStock,
      // brand,
      // category,
      pages,
      published,
      user: req.user._id, // Foydalanuvchi ID-si
    });

    const createdProduct = await product.save();

    // Foydalanuvchi modelida mahsulotni saqlash
    const user = await User.findById(req.user._id);
    user.products.push(createdProduct._id);
    await user.save();

    res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};

// Barcha mahsulotlarni olish
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// Bitta mahsulotni olish
exports.getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
    // next(error);
  }
};

// Mahsulotni yangilash
exports.updateProduct = async (req, res, next) => {
  try {
    const { name, description, pages, published, image } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    product.name = name;
    // product.price = price;
    product.pages = pages;
    product.description = description;
    product.published = published;
    product.image = image;
    // product.countInStock = countInStock;
    if (req.file) {
      product.image = req.file.path;
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    next(error);
  }
};

// Mahsulotni o'chirish
exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(product);

    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    await product.remove();
    res.json({ message: "Product removed" });
  } catch (error) {
    next(error);
  }
};
