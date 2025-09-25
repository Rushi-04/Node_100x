require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;


const adminAuth = async (req, res, next) => {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_ADMIN_PASSWORD);
    
    if(decodedInfo)
        {
            req.adminId = decodedInfo.id;
            console.log("Here in admin auth")
        next();
    }else{
        res.status(403).json({
            message: "Admin Not Authenticated, Terminating Request..."
        });
    }
}

module.exports = {
    adminAuth: adminAuth
}