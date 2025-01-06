import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
   try {
    const connectionInstance = mongoose.connect(`${'mongodb+srv://pushprajchaudhary:pushp1234@cluster0.g2fee.mongodb.net'}/${DB_NAME}`);
    console.log(`MongoDB Connected !! DB Host: ${(await connectionInstance).connection.host}`)
   } catch (error) {
    console.log('MongoDB Connection Failed', error);
    process.exit(1);
   }
}

export default connectDB;