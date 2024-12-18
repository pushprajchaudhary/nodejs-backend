import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors({
    origin: process.env.MONGODB_URL,
    credentials: true    
}));
app.use(cookieParser());
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));

import userRoute from "./routes/user.routes.js";

app.use('/api/v1/users', userRoute);

export { app } 