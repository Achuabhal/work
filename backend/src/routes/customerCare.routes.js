import express from 'express';
import {
  submitQuery,
  getAllQueries,
} from '../controllers/customerCare.controller.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { verifyAdmin } from '../middlewares/adminMiddleware.js';

const router = express.Router();

router.post('/submit', verifyToken, submitQuery);

router.get('/queries', verifyToken, verifyAdmin, getAllQueries); // Admin Only

export default router;
