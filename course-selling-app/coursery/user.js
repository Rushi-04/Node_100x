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
const {userAuth} = require("./middlewares/user");


userRouter.post('/signup', async (req, res) => {

    const requiredBody = z.object({
        email: z.email(),
        firstName: z.string().min(2).max(100),
        lastName: z.string().min(2).max(100),
        password: z.string().min(6).max(30)
    });

    const parsedData = requiredBody.safeParse(req.body);

    if(!parsedData.success)
    {
        res.json({
            message: "Incorrect format",
            error: parsedData.error
        })
        return
    }
    
    const {email, firstName, lastName, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 6)

    await userModel.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: hashedPassword
    });

    res.json({
        message: "User Sign-Up Successfull"
    });

});

userRouter.post('/signin', async (req, res) => {
    const {email, password} = req.body;

    const user = await userModel.findOne({
        email: email
    });

    const passwordMatched = await bcrypt.compare(password, user.password);

    if(passwordMatched){
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        res.json({
            token: token
        });
    }else{
        res.status(403).json({
            message : "Invalid Credentials"
        })
    }

});


userRouter.get('/purchases', userAuth, async (req, res) => {
    const userId = req.userId;

    const purchases = await purchaseModel.find({
       userId: userId 
    });

    return res.json({
        message: "User Purchased Courses",
        purchases: purchases
    });
});



// userRouter.get('/courses', userAuth, (req, res) => {
//     return res.json({
//         message: "All Courses"
//     });
// });


module.exports = {
    userRouter: userRouter
}