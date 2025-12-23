require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;


const adminAuth = async (req, res, next) => {
    try{
        const token = req.headers.token;
        if(!token)
        {
            res.status(401).json({
                message: "Token Missing"
            });
        }
        const decodedInfo = jwt.verify(token, JWT_ADMIN_PASSWORD);
    
        req.adminId = decodedInfo.id;
        next();
    }catch (err) {
        res.status(403).json({
            message: "Admin Not Authenticated."
        });
    }     
}

module.exports = {
    adminAuth: adminAuth
}