import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const url = process.env.MONGODB_URL; // Ensure this matches your .env variable name
    if (!url) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
