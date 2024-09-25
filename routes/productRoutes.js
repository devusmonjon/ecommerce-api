const express = require("express");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");
const multer = require("multer");

const upload = multer({ dest: "uploads/" }); // Fayllarni yuklash

const router = express.Router();

// Mahsulot yaratish
router.post("/", protect, upload.single("image"), createProduct);

// Barcha mahsulotlarni olish
router.get("/", getProducts);

// Bitta mahsulotni olish
router.get("/:id", getProductById);

// Mahsulotni yangilash
router.put("/:id", protect, upload.single("image"), updateProduct);

// Mahsulotni o'chirish
router.delete("/:id", protect, /*admin,*/ deleteProduct);

module.exports = router;
