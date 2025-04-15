import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
});

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true }, // ✅ Added firstName
    lastName: { type: String, trim: true },  // ✅ Added lastName
    gender: { type: String, enum: ["Male", "Female", "Other"] }, // ✅ Added gender
    email: { type: String, unique: true, sparse: true }, // ✅ Added email (optional)
    phone: { type: String, required: true, unique: true }, // Mobile number
    age: { type: Number, required: true }, // Age of the user
    addresses: [addressSchema], // ✅ Stores multiple addresses
    role: { type: String, enum: ["user", "admin"], default: "user" }, // Role verification
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
