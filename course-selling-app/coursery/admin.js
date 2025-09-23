const { Router } = require("express");
const { AdminModel } = require("./db");
const adminRouter = Router();
const JWT_SECRET = "CourseSellingApp";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {z} = require("zod");

adminRouter.post('/signup', async (req, res) => {

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

    await AdminModel.create({
        email: email,
        name: name,
        password: hashedPassword
    });

    res.json({
        message: "Admin Sign-Up Successfull"
    });
});

adminRouter.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const admin = await AdminModel.findOne({
        email: email
    });

    const passwordMatched = bcrypt.compare(password, admin.password);

    if(passwordMatched){
        const token = jwt.sign({
            id: admin._id
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


adminRouter.post("/course", (req, res) => {
    res.json({
        message: "add course"
    })
});

adminRouter.put("/course", (req, res) => {
    res.json({
        message: "add course"
    })
});

adminRouter.get("/course/bulk", (req, res) => {
    res.json({
        message: "add course"
    })
});


module.exports = {
    adminRouter: adminRouter
}