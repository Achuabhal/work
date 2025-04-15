import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    pinCode: { type: String, required: true },
    aadhaarNumber: { type: String, required: true },
    panCardNumber: { type: String, required: true },
    offlineTestConsent: { type: Boolean, default: false },
    role: { type: String, required: true }, // e.g., 'Beautician', 'Caterer'
    location: { type: String, required: true }, // e.g., 'Hyderabad', 'Bangalore'
  },
  { timestamps: true }
);

export default mongoose.model('Application', applicationSchema);
