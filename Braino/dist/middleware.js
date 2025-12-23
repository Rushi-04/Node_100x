import jwt from "jsonwebtoken";
import { config } from "dotenv";
import express from "express";
config();
const JWT_SECRET = process.env.JWT_SECRET;
export const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.token;
        if (!token) {
            return res.status(401).json({
                message: "Token missing"
            });
        }
        const decodedInfo = jwt.verify(token, JWT_SECRET);
        req.userId = decodedInfo.id;
        next();
    }
    catch (e) {
        return res.status(403).json({
            message: "User not authenticated."
        });
    }
};
//# sourceMappingURL=middleware.js.map