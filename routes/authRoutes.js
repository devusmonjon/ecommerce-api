const express = require("express");
const { registerUser, authUser } = require("../controllers/authController");
const router = express.Router();

// Ro'yxatdan o'tish
router.post("/register", registerUser);

// Kirish
router.post("/login", authUser);

module.exports = router;
