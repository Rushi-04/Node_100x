const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
require("dotenv").config();

const CONNECTION_STRING = process.env.CONNECTION_STRING;

mongoose.connect(CONNECTION_STRING);

const userSchema = new Schema({
    email: {type: String, unique: true},
    firstName: String,
    lastName: String,
    password: String
});

const adminSchema = new Schema({
    email: {type: String, unique: true},
    firstName: String,
    lastName: String,
    password: String
});

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId   // adminId
});

const purchaseSchema = new Schema({
    courseId: ObjectId,       
    userId: ObjectId          
});

const userModel = mongoose.model("users", userSchema);
const adminModel = mongoose.model("admins", adminSchema);
const courseModel = mongoose.model("courses", courseSchema);
const purchaseModel = mongoose.model("courses", purchaseSchema);

module.exports = {
    userModel: userModel,
    adminModel: adminModel,
    courseModel: courseModel,
    purchaseModel: purchaseModel
}
