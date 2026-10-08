const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: '../.env' });
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Health route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend API is healthy and running' });
});

// Placeholder API routes
app.get('/api/auth/me', (req, res) => {
  res.json({ message: 'Auth endpoint placeholder' });
});

const PORT = process.env.PORT || 5000;

// Connect Database then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
});
