import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
});

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Service',
      required: true,
    },
    serviceName: { type: String, required: true }, // Storing service name
    price: { type: Number, required: true }, // Price of the service
    date: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          return value >= new Date(); // Ensures the booking date is not in the past
        },
        message: 'Booking date cannot be in the past.',
      },
    },
    status: {
      type: String,
      enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Paid'],
      default: 'Pending',
    },
    paymentMethod: {
      type: String,
      enum: ['COD', 'Online'],
      required: true,
    },
    address: { type: addressSchema, required: true }, // Store a specific address for this booking
    isDeleted: { type: Boolean, default: false }, // Soft delete functionality
  },
  { timestamps: true }
);

// Indexing for performance (optional)
bookingSchema.index({ user: 1, date: -1 });

export default mongoose.model('Booking', bookingSchema);
