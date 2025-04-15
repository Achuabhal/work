import Booking from '../models/booking.model.js';

// ✅ Create a new booking
export const createBooking = async (req, res) => {
  try {
    const { serviceId, date, address, paymentMethod } = req.body;

    if (!serviceId || !date || !address || !paymentMethod) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // ✅ Ensure paymentMethod is valid
    const validPaymentMethods = ['COD', 'Online'];
    if (!validPaymentMethods.includes(paymentMethod)) {
      return res.status(400).json({ message: 'Invalid payment method' });
    }

    // ✅ Prevent booking for past dates
    if (new Date(date) < new Date()) {
      return res
        .status(400)
        .json({ message: 'Booking date cannot be in the past' });
    }

    const newBooking = new Booking({
      user: req.user.id,
      service: serviceId,
      date,
      address,
      status: 'pending',
      paymentStatus: 'Pending',
      paymentMethod,
    });

    await newBooking.save();
    res
      .status(201)
      .json({ message: 'Booking created successfully', booking: newBooking });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

// ✅ Get all bookings for the logged-in user (Sorted latest first)
export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id, isDeleted: false })
      .populate('service', 'name price')
      .populate('user', 'name email')
      .sort({ createdAt: -1 }); // Show latest bookings first

    res.status(200).json(bookings);
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

// ✅ Update a booking (Change Address or Date)
export const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { address, date } = req.body;

    const booking = await Booking.findOne({
      _id: id,
      user: req.user.id,
      isDeleted: false,
    });

    if (!booking) {
      return res
        .status(404)
        .json({ message: 'Booking not found or unauthorized' });
    }

    // ✅ Prevent setting a past date
    if (date && new Date(date) < new Date()) {
      return res
        .status(400)
        .json({ message: 'Booking date cannot be in the past' });
    }

    // ✅ Ensure at least one field is being updated
    if (!address && !date) {
      return res.status(400).json({ message: 'No changes provided' });
    }

    if (address) booking.address = address;
    if (date) booking.date = date;

    await booking.save();
    res.status(200).json({ message: 'Booking updated successfully', booking });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

// ✅ Cancel a booking (Soft Delete)
export const cancelBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await Booking.findOne({
      _id: id,
      user: req.user.id,
      isDeleted: false,
    });

    if (!booking) {
      return res
        .status(404)
        .json({ message: 'Booking not found or unauthorized' });
    }

    // ✅ Check if booking is already cancelled
    if (booking.status === 'cancelled') {
      return res.status(400).json({ message: 'Booking is already cancelled' });
    }

    booking.status = 'cancelled';
    booking.isDeleted = true;

    await booking.save();
    res
      .status(200)
      .json({ message: 'Booking cancelled successfully', booking });
  } catch (error) {
    console.error('Error cancelling booking:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};
