// import mongoose from "mongoose";
// import { DB_NAME } from "./constant.js";
import connectDB from "./db/index.js";
import dotenv from 'dotenv';

dotenv.config({
    path: './env'
})

connectDB()
.then(() =>{

})
.catch((error) => {
    console.log('DB connection failed');
})

// import express from 'express';
// const app = express();
// ;(async () => { 
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on('err', err => {
//           console.log('err', err);
//           throw err
//         });
//         app.listen(process.env.PORT, () => {
//             console.log('App is listening on PORT: 8000');
//         })
//     } catch (error) {
//         console.log('error', error);
//         throw error
//     }
// })();