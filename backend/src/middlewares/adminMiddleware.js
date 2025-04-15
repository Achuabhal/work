import User from "../models/User.js";

export const verifyAdmin = async (req, res, next) => {
  try {
    const admin = await User.findById(req.user.id); // Get user from DB

    if (!admin || admin.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admins only." });
    }

    req.admin = admin; // Attach admin details to request
    next();
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};



// Assign Admin Role (One-Time Setup)
// To make an admin, update the database manually.

// Manually Update in MongoDB
// Run this in MongoDB Compass or your database shell:
// db.users.updateOne({ phone: "your_admin_phone_number" }, { $set: { role: "admin" } });
