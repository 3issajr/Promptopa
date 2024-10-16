import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true, //This option allows the MongoDB driver to use the new URL string parser, which supports the standard MongoDB connection string format.
      useUnifiedTopology: true, //This enables the new unified topology layer, which improves the connection management, monitoring, and failover capabilities.
    });
    isConnected = true;
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
};
