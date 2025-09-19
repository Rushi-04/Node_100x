// Assignment : Creating an auth middleware

// Try creating a middleware called auth that verifies if a user is logged in and ends the request early if the user isn't logged in ?

const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'NewJsonTokenFromMe';
const app = express();

const auth = (req, res, next) => {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);
    const username = decodedInfo.username;

    const user = users.find(u => u.username === username);

    if(user)
    {
        console.log('User Verified, redirecting it to route.');
        req.username = username;
        next();
    }else{
        console.log('User Not Verified');
        res.status(401).json({
            msg: 'User Not Verified, terminating request.'
        })
    }
}

app.use(express.json());

const users = []

const signUpHandler = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })

    res.json({
        msg: 'User created successfully.'
    })
    console.log(users);
}

const signInHandler = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(u => u.username === username && u.password === password);

    if(user)
    {
        token = jwt.sign({username: username}, JWT_SECRET);

        res.json({
            token : token
        })
    }else{
        res.status(403).json({
            message: "Invalid username or password"
        })
    }
    console.log(users);
}

const infoHandler = (req, res) => {
    const username = req.username;

    const user = users.find(u => u.username === username);

    if(user)
    {
        res.json({
            username: user.username,
            password: user.password
        })
    }else{
        res.json({
            message: 'Token Invalid'
        })
    }
}

app.post('/sign-up', signUpHandler);

app.post('/sign-in', signInHandler);

app.get('/me', auth, infoHandler);

app.listen(3000, () => { console.log('Listening on port 3000 ....') })
