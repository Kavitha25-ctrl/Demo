const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connStr = process.env.MONGO_URI || 'mongodb://localhost:27017/smart-career-tracker';
    const conn = await mongoose.connect(connStr, {
      serverSelectionTimeoutMS: 2000
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.warn(`MongoDB Connection error (${err.message}). Attempting MongoMemoryServer fallback...`);
    try {
      const { MongoMemoryServer } = require('mongodb-memory-server');
      const mongoServer = await MongoMemoryServer.create();
      const mongoUri = mongoServer.getUri();
      const conn = await mongoose.connect(mongoUri);
      console.log(`In-Memory MongoDB Started & Connected: ${conn.connection.host} (${mongoUri})`);
    } catch (fallbackErr) {
      console.error(`MongoDB Fallback Failed: ${fallbackErr.message}`);
      // Continue running server so healthcheck / APIs without DB can still respond or handle errors
    }
  }
};

module.exports = connectDB;
