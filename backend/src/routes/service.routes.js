import express from 'express';
import {
  addService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  restoreService
} from '../controllers/service.controller.js';
import { verifyAdmin } from '../middlewares/adminMiddleware.js';

const router = express.Router();

// Admin routes
router.post('/add', verifyAdmin, addService);
router.get('/all', verifyAdmin, getAllServices);
router.get('/:id', verifyAdmin, getServiceById); // Get single service
router.put('/update/:id', verifyAdmin, updateService);
router.delete('/delete/:id', verifyAdmin, deleteService);
router.put('/restore/:id', verifyAdmin, restoreService); // Restore service

export default router;
