import User from '../models/User.js';
import Booking from '../models/booking.model.js';

export const updateUserDetails = async (req, res) => {
  try {
    const userId = req.user.id; // Extracted from token middleware
    const { firstName, lastName, gender, age, email, phone, addresses } = req.body;

    // Find user by ID
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Update only the provided fields
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (gender) user.gender = gender;
    if (age) user.age = age;
    if (email) user.email = email;
    if (phone) user.phone = phone;
    if (addresses) user.addresses = addresses;

    await user.save(); // Save updated details

    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id; // Extracted from token middleware
    const orders = await Booking.find({ user: userId, isDeleted: false })
      .sort({ createdAt: -1 })
      .populate('service', 'name price'); // Populate service details if needed

    res.status(200).json({ success: true, orders });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Error fetching orders', error });
  }
};

