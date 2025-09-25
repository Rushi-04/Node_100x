require("dotenv").config();
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;


const userAuth = async (req, res, next) => {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_USER_PASSWORD);

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

module.exports = {
    userAuth: userAuth
}