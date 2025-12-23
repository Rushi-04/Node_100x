// @ts-ignore -- always ignore to include it, instead fix the error
// const express = require("express");   // dont use this in T.S projects
// Steps :-
// npm init -y 
// npx tsc --init 
// tsc - b 
// npm install express       --> for errors then install, npm install @types/express
// npm install jsonwebtoken  --> for errors then install, npm install @types/jsonwebtoken
// npm install mongoose
// npm install dotenv
// npm install --save-dev @types/dotenv
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NDkzODczZjRiMjcwMDI0ZTUwY2FmMCIsImlhdCI6MTc2NjQwNjQwNiwiZXhwIjoxNzY3MDExMjA2fQ.QPIt-MYZI4i2m00BRGEqY8wE44ydu3hbkrt4lUKhjBo
//-------------------------------------------------------------------------------------------
import express from "express";
import jwt from "jsonwebtoken";
import { z } from "zod";
import bcrypt from "bcrypt";
import { UserModel, ContentModel, TagsModel, LinkModel } from "./db.js";
import { config } from "dotenv";
import mongoose, {} from "mongoose";
import { authMiddleware } from "./middleware.js";
config();
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const JWT_SECRET = process.env.JWT_SECRET;
if (!CONNECTION_STRING) {
    throw new Error("CONNECTION_STRING is not defined");
}
const app = express();
app.use(express.json());
// Sign Up
app.post("/api/v1/signup", async (req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;
    const requiredBody = z.object({
        username: z.string().min(3).max(20),
        password: z
            .string()
            .min(8, { error: "Password must be at least 8 characters" })
            .max(20, { error: "Password cannot exceed 20 characters" })
            .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
            .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
            .regex(/[0-9]/, { message: "Password must contain at least one number" })
            .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" })
    });
    const parsedBody = requiredBody.safeParse(req.body);
    if (!parsedBody.success) {
        return res.json({
            message: "Incorrect format",
            error: parsedBody.error
        });
    }
    // const username = req.body.username;
    // const password = req.body.password;
    const { username, password } = parsedBody.data;
    try {
        const hashedPassword = await bcrypt.hash(password, 6);
        await UserModel.create({
            username: username,
            password: hashedPassword
        });
        res.status(201).json({ message: "User Created Successfully" });
    }
    catch (e) {
        res.status(403).json({
            message: "User Already Exists.",
            error: e.message
        });
    }
});
// Sign In 
app.post("/api/v1/signin", async (req, res) => {
    const { username, password } = req.body;
    // check this user exists or not
    const user = await UserModel.findOne({ username: username });
    if (!user) {
        return res.status(404).json({ message: "User Not Found" });
    }
    const passwordMatched = await bcrypt.compare(password, user.password);
    if (!passwordMatched) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
    return res.status(200).json({
        message: "Login Successful",
        token: token
    });
});
// Add Content
app.post("/api/v1/content", authMiddleware, async (req, res) => {
    const { title, type, link, tags } = req.body;
    // console.log(title + "\n" + type + "\n" + link + "\n" + tags + "\n" + req.userId);
    if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        await ContentModel.create({
            title: title,
            type: type,
            link: link,
            tags: tags,
            userId: req.userId
        });
        res.status(200).json({
            message: "Content Added Successfully"
        });
    }
    catch (e) {
        return res.status(400).json({
            message: "Error Occured",
            error: e.message
        });
    }
});
// Fetch All Content
app.get("/api/v1/content", authMiddleware, async (req, res) => {
    if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const content = await ContentModel.find({ userId: req.userId }).populate("userId", "username");
        res.status(200).json({
            content: content
        });
    }
    catch (e) {
        res.status(404).json({
            message: "Content not found",
            error: e.message
        });
    }
});
// delete Content
app.delete("/api/v1/content", authMiddleware, async (req, res) => {
    const { contentId } = req.body;
    if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    if (!contentId) {
        return res.status(401).json({ message: "ContentId missing" });
    }
    try {
        const result = await ContentModel.deleteOne({ _id: contentId, userId: req.userId });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Content not found" });
        }
        res.status(200).json({
            message: "Content Deleted."
        });
    }
    catch (e) {
        res.status(500).json({
            message: "Error deleting content",
            error: e.message
        });
    }
});
// Share a link
app.post("/api/v1/brain/share", (req, res) => {
});
// Share a link
app.post("/api/v1/brain/:shareLink", (req, res) => {
});
// -----------------------------------------------------
const main = async () => {
    await mongoose.connect(CONNECTION_STRING);
    console.log("Connected to MongoDB.");
    app.listen(3000, () => {
        console.log("Server running on port 3000...");
    });
};
main();
//# sourceMappingURL=index.js.map