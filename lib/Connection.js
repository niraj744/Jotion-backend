import mongoose from "mongoose";

export const Connection = async (url) => {
  try {
    await mongoose.connect(url, { dbName: "Jotion" });
    console.log("Connected to Mongodb");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};
