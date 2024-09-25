const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    published: {
      type: Number,
      required: true,
    },
    pages: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    countInStock: {
      type: Number,
      required: false,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User", // Foydalanuvchi modeliga referens
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
