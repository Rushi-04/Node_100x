import jwt from "jsonwebtoken";
import {config} from "dotenv";
import express from "express";

interface JwtPayload{
    id: string;
}

config();

const JWT_SECRET = process.env.JWT_SECRET as string;


export const authMiddleware = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        const token = req.headers.token as string;
        if(!token){
            return res.status(401).json({
                message: "Token missing"
            });
        }
        const decodedInfo = jwt.verify(token, JWT_SECRET) as JwtPayload;
        req.userId = decodedInfo.id;
        next();
    }catch(e){ 
        return res.status(403).json({
            message: "User not authenticated."
        });
    }
}