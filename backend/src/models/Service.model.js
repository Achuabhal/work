import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true }, // Example: Beauty, Cleaning, Repair
    description: { type: String },
    price: { type: Number, required: true },
    duration: { type: String }, // Example: "1 hour"
    imageUrl: { type: String }, // Optional image
    isActive: { type: Boolean, default: true }, // Enable or disable service
    ratings: { type: Number, default: 0 }, // Average rating
    reviews: [{ userId: mongoose.Schema.Types.ObjectId, comment: String }], // User reviews
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    }, // Track which admin added it
  },
  { timestamps: true }
);

export default mongoose.model('Service', serviceSchema);
