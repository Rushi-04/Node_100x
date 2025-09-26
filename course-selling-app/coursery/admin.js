const { Router } = require("express");
const { adminModel, courseModel } = require("./db");
const adminRouter = Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {z, readonly} = require("zod");
const { adminAuth } = require("./middlewares/admin");
require("dotenv").config();
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD


adminRouter.post('/signup', async (req, res) => {

    const requiredBody = z.object({
        email: z.email(),
        firstName: z.string().min(2).max(100),
        lastName: z.string().min(2).max(100),
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

    // const email = req.body.email;
    // const firstName = req.body.name;
    // const lastName = req.body.name;
    // const password = req.body.password;

    const {email, firstName, lastName, password} = req.body;

    const hashedPassword = await bcrypt.hash(password, 6)

    await adminModel.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: hashedPassword
    });

    res.json({
        message: "Admin Sign-Up Successfull"
    });
});

adminRouter.post('/signin', async (req, res) => {
    const {email, password} = req.body;

    const admin = await adminModel.findOne({
        email: email
    });

    const passwordMatched = await bcrypt.compare(password, admin.password);

    if(passwordMatched){
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        res.json({
            token: token
        });
    }else{
        res.status(403).json({
            message : "Invalid Credentials"
        })
    }
});


adminRouter.post("/course", adminAuth, async (req, res) => {
    console.log("reached here")
    const adminId = req.adminId;

    const { title, description, price, imageUrl } = req.body;

    const course = await courseModel.create({
        title: title, 
        description: description, 
        price: price, 
        imageUrl: imageUrl,
        creatorId: adminId
    });

    res.json({
        message: "Course Added",
        courseId: course._id
    });
});

adminRouter.put("/course", adminAuth, async (req, res) => {
    const adminId = req.adminId;

    const { title, description, price, imageUrl, courseId } = req.body;


    
    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    }, {
        title: title, 
        description: description, 
        price: price, 
        imageUrl: imageUrl
    });

    if(!course)
    {
        res.status(404).json({message: "Course Not Found or unauthorized"})
    }

    res.json({
        message: "Course Updated",
        courseId: course._id
    });
});

adminRouter.get("/course/bulk", adminAuth, async (req, res) => {
    const adminId = req.adminId;
    const courses = await courseModel.find({
        creatorId: adminId,
    });

    res.json({
        message: "All Courses",
        courses: courses
    })
});


module.exports = {
    adminRouter: adminRouter
}