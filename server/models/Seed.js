import mongoose from "mongoose";
import { Product } from "./Schema.js";
import products from "./SeedData.js";

const seedDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/shop");

  await Product.deleteMany({});
  await Product.insertMany(products);

  console.log("Database seeded");

  mongoose.connection.close();
};

seedDB();