

// const express = require("express");

// const app = express();

// // requestCounter
// let request = 0;
// function requestCouter(req, res, next)
// {
//     request += 1;
//     console.log(`No. of Request: ${request}`);
//     // modify the req, res object
//     req.msg = "Rushi here, just changing the request from middleware";

//     // May or may not stop the request
//     if(request % 2 == 0)
//     {   
//         // calling the next function (final request handler)
//         next();
//         console.log('Forwarding request.');
//     }else{
//         console.log('Terminating request');
//         res.json({msg : 'I ended up too quickly.'})
//     }

// }

// // creating 4 routes add, sub, mul, div
// //1. ADD
// app.get('/add',requestCouter , (req, res) => {        // using query   // Example URL: /add?a=21&b=11
//     // requestCouter(req, res);
//     const a = req.query.a;
//     const b = req.query.b;
//     // const a = parseInt(req.params.a);
//     // const b = parseInt(req.params.b);

//     res.json({"sum" : `${a+b}`});
// });

// //2.SUB
// app.use(requestCouter);
// const realSubHandler = (req, res) => {  // using params
//     // requestCouter(req, res);
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);
//     console.log(req.msg);

//     // res.send(`Sub of ${a} and ${b} is: ${a-b}`);
//     res.json({"sub" : `${a-b}`});
// } 
// app.get('/sub/:a/:b', realSubHandler);


// //MUL
// app.get('/mul/:a/:b', (req, res) => {
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);

//     // res.send(`Sum of ${a} and ${b} is: ${a*b}`);
//     res.json({"mul" : `${a*b}`});
// });

// //DIVIDE
// app.get('/div/:a/:b', (req, res) => {
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);

//     // res.send(`Sum of ${a} and ${b} is: ${a/b}`);
//     res.json({"div" : `${a/b}`});
// });


// app.listen(3000, ()=> {
//     console.log("Listening on port 3000...")
// });



const express = require('express');
const app = express();
const cors = require("cors");

// how to use cors --> const cors = require('cors') ==> app.use(cors()) -- to allow all or app.use(cors({domains: ['https://google.com']}))

const middleman = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString();
    
    console.log(`Request info: method: ${method}, url: ${url}, timestamp: ${timestamp}.`)
    next();
}

app.use(middleman);
app.use(cors())

const realRequestHandler = (req, res) => {
    console.log('Hello from Request Handler.');
    res.json({msg : 'Hello, Rushi'});
}

app.get('/', realRequestHandler);

app.get('/api/v1/notifications', (req, res) => {
    console.log("Notifications Requested.")
    res.status(200).json({
        "network": 7,
        "jobs": 8,
        "messaging": 4,
        "notifications": 5 
    })
})

app.get('/api/v1/todos', (req, res) => {
    console.log("Todos Requested.")
    const id = req.query.id;
    res.status(200).json({
        "todo": {
            "id": id,
            "title": `Todo ${id}`,
            "description": `This is Todo ${id}`,
            "completed": false
        }
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000...');
});