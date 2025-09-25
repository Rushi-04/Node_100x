const {Router} = require("express");
const jwt = require("jsonwebtoken");
const courseRouter = Router();
require("dotenv").config();
const userAuth = require("./middlewares/user");
const adminAuth = require("./middlewares/admin");
const { purchaseModel, courseModel } = require("./db");


courseRouter.post('/purchase', userAuth, async (req, res) => {
    const userId = req.userId;
    const courseId = req.courseId;

    await purchaseModel.create({
        courseId: courseId,
        userId: userId
    })

    res.json({
        message: "You've successfully bought the course."
    });
});


courseRouter.get('/preview', async (req, res) => {
    const courses = await courseModel.find({});
    res.json({
        message: "Course Preview Endpoint",
        courses: courses
    });
});


module.exports = {
    courseRouter: courseRouter
}