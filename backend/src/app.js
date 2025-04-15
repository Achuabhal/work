import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import routes from './routes/index.js'; // Import all routes

dotenv.config();

// Initialize Express app
const app = express();

// Middlewares
app.use(
  cors({
    origin: 'http://localhost:5173', // Adjust based on frontend URL
    credentials: true, //  Important to allow cookies
  })
); // Enable CORS
app.use(express.json()); // Parse JSON request bodies
app.use(cookieParser()); // Parse cookies

// Connect to MongoDB
connectDB();

// Routes
app.use('/api', routes);

// Default Route
app.get('/', (req, res) => {
  res.send('Duzoo Backend API is running...');
});

export default app;
