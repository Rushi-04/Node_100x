const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "LearningMongoDb";
const { UserModel, TodoModel } = require('./db')

const app = express();
app.use(express.json());

const auth = async (req, res, next) => {
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token, JWT_SECRET);

    // const id = decodedInfo._id;

    // const user = await UserModel.findOne({
    //     _id: id
    // });

    if(decodedInfo)
    {
        req.userId = decodedInfo.id ;
        next();
    }else{
        res.status(403).json("Not Authenticated, Terminating Request...");
    }
    
}

// non-authenticated routes
app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    await UserModel.create({
        email: email,
        name: name,
        password: password
    })

    res.json({
        message: "User Created Successfully."
    });
});

app.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    });

    if(user){   
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        });
    }else{
        res.status(403).json({
            message : "Invalid Credentials"
        })
    }

});

// authenticated routes
app.post('/todo', auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId: userId,
        description: title,
        done: done
    });

    res.json({
        message: "Todo Created Successfully."
    })
});

app.get('/todos', auth, async (req, res) => {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId: userId
    })
    res.json({
        todos
    })
});

app.listen(3000, () => {
    console.log("Listening on port 3000 ...")
});