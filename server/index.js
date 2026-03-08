import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import dotenv from 'dotenv';
import bannerRoutes from './routes/bannerRoutes.js';


dotenv.config();

const app = express();
const PORT = 6001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));


app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/banners', bannerRoutes);


const startServer = async () => {
  try {
    connectDB();
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log("Server running on port 6001");
    });

  } catch (err) {
    console.error("DB connection error:", err);
  }
};

startServer();