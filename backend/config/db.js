import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongoDB connected: ${connect.connection.host}`.cyan.bgYellow);
  } catch (error) {
    console.log(`error: ${error.message}`.cyan.bgRed);
    process.exit(1);
  }
};

export default connectDB;
