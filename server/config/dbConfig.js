// connecting to MongoDB
import mongoose from "mongoose";
import { config } from "./appConfig.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.CONN_STR, { dbName: config.DB_NAME });
    console.log("db connected");
  } catch (err) {
    console.log(err);
  }
};

const closeDB = async () => {
  try {
    await mongoose.connection.close();
    console.log("db disconnected");
  } catch (err) {
    console.log(err);
  }
};

export { connectDB, closeDB };
