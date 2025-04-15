import mongoose from 'mongoose';

const customerQuerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  issue: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('CustomerQuery', customerQuerySchema);
