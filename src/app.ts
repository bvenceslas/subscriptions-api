import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import subscriptionRoutes from "./routes/subscription.routes";

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// app routes
app.use("/api", subscriptionRoutes);

export const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to MongoDB");

    const PORT = process.env.PORT || 9000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

startServer();
