require("dotenv").config();
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;


const userAuth = async (req, res, next) => {
    try {
        // const token = req.headers.token;
        const token = req.cookies.token;
        if(!token){
            res.status(403).json({
                message: "Token Missing."
            });
        }
        const decodedInfo = jwt.verify(token, JWT_USER_PASSWORD);

        const userId = decodedInfo.id;
        next();
    } catch (err) {
        res.status(403).json({
            message: "User Not Authenticated"
        });
    }
}

module.exports = {
    userAuth: userAuth
}