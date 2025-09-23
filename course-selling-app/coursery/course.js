const {Router} = require("express");
const JWT_SECRET = "CourseSellingApp";
const jwt = require("jsonwebtoken");
const courseRouter = Router();

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


const adminAuth = async (req, res, next) => {
    const token = req.header.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);

    if(decodedInfo)
    {
        req.adminId = decodedInfo.id;
        next();
    }else{
        res.status(403).json({
            message: "Admin Not Authenticated, Terminating Request..."
        });
    }
}

courseRouter.post('/purchase', userAuth, (req, res) => {
    res.json({
        message: "Course Purchase Endpoint"
    });
});


courseRouter.get('/preview', userAuth, (req, res) => {
    res.json({
        message: "Course Preview Endpoint"
    });
});

courseRouter.post('/create', adminAuth, (req, res) => {
    res.json({
        message: "Course Create Endpoint"
    });
});

courseRouter.delete('/delete', adminAuth, (req, res) => {
    res.json({
        message: "Course Delete Endpoint"
    });
});

courseRouter.put('/add-content', adminAuth, (req, res) => {
    res.json({
        message: "Course Delete Endpoint"
    });
});

module.exports = {
    courseRouter: courseRouter
}