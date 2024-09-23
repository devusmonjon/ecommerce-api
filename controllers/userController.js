const User = require("../models/userModel");

// Foydalanuvchi ma'lumotlarini olish
exports.getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
      .select("-password")
      .populate("products"); // Mahsulotlarni populate qilish

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      products: user.products, // Foydalanuvchi mahsulotlari
    });
  } catch (error) {
    next(error);
  }
};
