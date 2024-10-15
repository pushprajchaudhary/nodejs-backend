import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
   try {
    const connectionInstance = mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`MongoDB Connected !! DB Host: ${(await connectionInstance).connection.host}`)
   } catch (error) {
    console.log('MongoDB Connection Failed', error);
    process.exit(1);
   }
}

export default connectDB;