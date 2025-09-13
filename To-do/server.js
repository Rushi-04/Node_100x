// console.log("Hello from Node JS file.\n");

// for(let i = 0;i<10;i++)
// {
//    console.log(i+"Tera\n");
//    console.log(i+"Mera\n");
// }

// const fs = require("fs");

// fs.readFile("a.txt", function(err, data)
// {
//    console.log(data);
// })

// const path = require("path");
// console.log(__dirname);
// console.log(path.join(__dirname, "index.js", "../../starter-project", "index.js"))

// creating a to-do backend

const express = require("express");
const app = express();



// app.use(express.json); // --> to parse json bodies

// get all the todos
let todos = [];
const nextId = Date.now.toString();

//Home Page
app.get("/", (req, res) => {
   res.send("<html><body><div style='display:flex; justify-content:center; align-items:center;' ><b>Hello, Welcome to our first backend -- To do Backend --</div></b></body></html>");
});

//get all todos
app.get('/todos', (req, res) => {
   res.json(todos);
});

// get a specific todo
app.get('/todos-:id', (req, res) => {
   const id = parseInt(req.params.id); // use parse int
   const todo = todos[id];

   if(!todo)
   {
      return res.status(404).json({error: "Todo Not Found."}); 
   }
   res.json(todo);
});

// post a specific todo
app.post('/todos', (req, res) => {
   const { title } = req.body;
   if(typeof title !== "string" || !title.trim())
   {
      return res.status(400).json({error: "title is required"});
   }

   const todo = {
      id: nextId(),
      title: title.trim(),
      completed: false,
      createdAt: Date.now()
   }

   todos.push(todo);
   res.status(201).json(todo);

});

app.listen(3000, () => {
   console.log("Server Running on port 3000...")
});