// const express = require("express");
// const Router = express.Router;

const { Router } =  require("express");
const { userModel, purchaseModel } = require("./db");
const jwt = require("jsonwebtoken");
const userRouter = Router();
const bcrypt = require("bcrypt");
const {z} = require("zod");
require("dotenv").config();
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const userAuth = require("./middlewares/user");






// userRouter.get('/courses', userAuth, (req, res) => {
//     return res.json({
//         message: "All Courses"
//     });
// });


module.exports = {
    userRouter: userRouter
}