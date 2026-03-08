import mongoose from 'mongoose';
import { Product } from '../models/Schema.js';
import products from '../models/SeedData.js';


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/shop', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(`Error in DB connection: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
