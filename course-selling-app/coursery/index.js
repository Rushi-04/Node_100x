// --------------------------------------------- Steps for our Coursery Project ---------------------------------------------

// Create a course selling app 

// — Initialize a new Node.js project ✅
// — Add Express, jsonwebtoken to it as a dependency ✅
// — Create index.js ✅
// — Add route skeleton for user login, signup, purchase a course, see course ✅
// — Add routes for admin login, admin signup, create a course, delete a course, add course content. ✅
// — Add middlewares for user and admin auth ✅
// — Add a database (mongodb), use dotenv to store the database connection string ✅
// — Define the schema for User, Admin, Course, Purchase 
// — Complete the routes for user login, signup, purchase a course, see course (Extra points - Use express routing to better structure
//  your routes) 
// — Create the frontend 

const express = require("express");
const { userRouter } =  require("./user");
const { courseRouter } = require("./course");
const { adminRouter } = require("./admin");


const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

app.listen(3000, () => {
    console.log("Listening on port 3000...")
});
