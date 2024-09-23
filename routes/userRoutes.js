const express = require("express");
const { getUserProfile } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

// Foydalanuvchi profilini olish
router.get("/profile", protect, getUserProfile);

module.exports = router;
