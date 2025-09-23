const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

mongoose.connect('mongodb+srv://Rushi:Rushi%4021@cluster0.fiseedp.mongodb.net/real-todo-db')

const User = new Schema({
    email: {type: String, unique: true},
    name: String,
    password: String
});

// 8805277049  --  8805277049 
const Todo = new Schema({
    description: String,
    done: Boolean,
    userId: ObjectId 
});

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel: UserModel,
    TodoModel: TodoModel
}
