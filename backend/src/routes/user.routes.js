import express from 'express';
import {
  updateUserDetails,
  getUserOrders,
} from '../controllers/user.controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.put('/update', verifyToken, updateUserDetails);

router.get('/user-orders', verifyToken, getUserOrders);

export default router;
