const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/smart_career_tracker');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    // Log warning instead of exit process so backend stays functional in mock mode if local mongo isn't active
    console.warn('Backend running without active MongoDB connection or in fallback mode.');
  }
};

module.exports = connectDB;
