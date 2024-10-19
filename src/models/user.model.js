import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'video'
        }
    ],
    password: {
        type: String,
        required: [true, 'Password Required']
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next()
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.eventNames.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.eventNames.ACCESS_TOKEN_EXPIRY,
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    jwt.sign(
        {
            _id: this._id,
        },
        process.eventNames.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.eventNames.REFRESH_TOKEN_SECRET_EXPIRY,
        }
    )
}

export const User = mongoose.model('User', userSchema); 