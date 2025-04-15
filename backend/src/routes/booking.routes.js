import express from 'express';
import {
  createBooking,
  getUserBookings,
  updateBooking,
  cancelBooking
} from '../controllers/booking.controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// POST /api/bookings - Create a new booking
router.post('/', verifyToken, createBooking);

// GET /api/bookings - Get bookings for the logged-in user
router.get('/', verifyToken, getUserBookings);

// PUT /api/bookings/:id - Update a booking (change address or date)
router.put('/:id', verifyToken, updateBooking);

// DELETE /api/bookings/:id - Cancel a booking
router.delete('/:id', verifyToken, cancelBooking);

export default router;
