
// Approach  1 : generating token and verifying it.

// const express = require('express');
// const app = express();


// app.use(express.json());

// let users = [];

// function generateToken() {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let token = '';
//     for (let i = 0; i < 21; i++) {
//         token += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return token;
// }

// app.post('/sign-up', function (req, res) {
//     const username = req.body.username;
//     const password = req.body.password;

//     users.push({
//         username: username,
//         password: password
//     })

//     res.json({
//         message: "You are signed up buddy."
//     })
//     console.log(users);
// })

// app.post('/sign-in', function (req, res) {
//     const username = req.body.username;
//     const password = req.body.password;

//     const user = users.find(u => u.username === username && u.password === password);

//     if (user) {
//         const token = generateToken();
//         user.token = token;

//         res.json({
//             token: token
//         })

//         console.log(users);
//     } else {
//         res.status(403).json({
//             message: "Invalid username or password"
//         })
//     }

// })

// app.get('/me', function(req, res){
//     const token = req.headers.authorization;

//     const user = users.find(u => u.token === token);

//     if(user)
//     {
//         res.json({
//             username: user.username,
//             password: user.password
//         })
//     }else{
//         res.status(401).json({
//             message: "Token Invalid"
//         })
//     }
// })


// app.listen(3000, () => { console.log('Listening on port 3000...') });



// Approach 2 - using JSON WEB TOKENS (JWT's)

const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'JaiShreeRamHarHarMahadev';
const app = express();
app.use(express.json());



let users = [];

function generateToken() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 21; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}

app.post('/sign-up', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You are signed up buddy."
    })
    console.log(users);
})

app.post('/sign-in', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({username: username}, JWT_SECRET)
        // const token = generateToken();
        // user.token = token;
        res.json({
            token: token
        })
    } else {
        res.status(403).json({
            message: "Invalid username or password"
        })
    }
    console.log(users);

})

app.get('/me', function(req, res){
    const token = req.headers.authorization; // JWT
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    const username = decodedInfo.username;
    // const user = users.find(u => u.token === token);
    
    const user = users.find(u => u.username === username);

    if(user)
    {
        res.json({
            username: user.username,
            password: user.password
        })
    }else{
        res.status(401).json({
            message: "Token Invalid"
        })
    }
})


app.listen(3000, () => { console.log('Listening on port 3000...') });