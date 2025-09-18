import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MongoDB URI is undefined");
}

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

async function dbConnect(): Promise<void> {
  try {
    if (connection.isConnected) {
      //won't run if isConnected is 1, 2, 3 i.e. connected, connecting, disconnecting
      console.log("Connection already exists");
      return;
    }

    const connectioInstance = await mongoose.connect(MONGODB_URI, {
      dbName: process.env.MONGODB_DB,
    });

    connection.isConnected = connectioInstance.connections[0].readyState; //tells the connection status
    console.log("Connection established");
  } catch (error) {
    throw new Error("Failed to connect to MongoDB" + error);
  }
}

export default dbConnect;
