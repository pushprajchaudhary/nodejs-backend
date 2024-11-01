import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from 'jsonwebtoken'

export const verifyJWT = asyncHandler((req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken || req.header['Authorization'].replace('Bearer ', '');

        if (!accessToken) {
            throw new ApiError(401, 'Unauthorised Access');
        }

        const decodedToken = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);

        const user = User.findById(decodedToken._id).select('-password -accessToken');

        if (!user) {
            throw new ApiError(401, 'Invalid Token');
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})