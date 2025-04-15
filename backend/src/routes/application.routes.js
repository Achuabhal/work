import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { verifyAdmin } from '../middlewares/adminMiddleware.js';
import { submitApplication } from '../controllers/application.controller.js';
import { getAllApplications } from '../controllers/application.controller.js';

const router = express.Router();

router.post('/apply', submitApplication);

router.get('/getApplications', verifyToken, verifyAdmin, getAllApplications);

export default router;
