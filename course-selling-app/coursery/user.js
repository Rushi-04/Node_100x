// const express = require("express");
// const Router = express.Router;

const { Router } =  require("express");
const { UserModel } = require("./db");
const JWT_SECRET = "CourseSellingApp";
const jwt = require("jsonwebtoken");
const userRouter = Router();
const bcrypt = require("bcrypt");
const {z} = require("zod");



const userAuth = async (req, res, next) => {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);

    if(decodedInfo)
    {  
        req.userId = decodedInfo.id;
        next();
        
    }else{
        res.status(403).json({
            message: "User Not Authenticated, Terminating Request..."
        });
    }
}

userRouter.post('/signup', async (req, res) => {

    const requiredBody = z.object({
        email: z.email(),
        name: z.string().min(2).max(100),
        password: z.string().min(6).max(30)
    });

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success)
    {
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }

    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 6)

    await UserModel.create({
        email: email,
        name: name,
        password: hashedPassword
    });

    res.json({
        message: "User Sign-Up Successfull"
    });

});

userRouter.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    });

    const passwordMatched = bcrypt.compare(password, user.password);

    if(passwordMatched){
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        });
    }else{
        res.status(403).json({
            message : "Invalid Credentials"
        })
    }

});


userRouter.get('/purchases', userAuth, (req, res) => {
    return res.json({
        message: "User Purchased Courses"
    });
});



userRouter.get('/courses', userAuth, (req, res) => {
    return res.json({
        message: "All Courses"
    });
});


module.exports = {
    userRouter: userRouter
}