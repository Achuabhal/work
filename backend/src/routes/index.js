import express, { application } from 'express';
import otpRoutes from './otp.routes.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { verifyAdmin } from '../middlewares/adminMiddleware.js';
import bookingRoutes from './booking.routes.js';
import serviceRoutes from './service.routes.js';
import locationRoutes from './location.routes.js';
import userRoutes from './user.routes.js';
import customerCareRoutes from './customerCare.routes.js';
import applicationRoutes from './application.routes.js';

const router = express.Router();

// Test route
router.get('/', (req, res) => {
  res.send('Duzoo API Routes are working!');
});

router.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
}); //Implemet the protected routes using verifytoken

router.get('/dashboard', verifyToken, verifyAdmin, (req, res) => {
  res.json({
    message: 'Welcome to the admin dashboard',
    admin: {
      id: req.admin._id,
      phone: req.admin.phone,
      role: req.admin.role,
    },
  });
});

router.use('/otp', otpRoutes);

router.use('/booking', bookingRoutes);

router.use('/services', serviceRoutes);

router.use('/location', locationRoutes);

router.use('/user', userRoutes);

router.use('/customerCare', customerCareRoutes);

router.use('/application', applicationRoutes);

export default router;
