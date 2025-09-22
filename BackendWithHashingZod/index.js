const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "LearningMongoDb";
const { UserModel, TodoModel } = require('./db')
const bcrypt = require('bcrypt');
const { z } = require("zod");

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

    const requiredBody = z.object({
        email: z.email(),
        name: z.string().min(4).max(100),
        password: z.string().min(4).max(30)
    });

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success)
    {
        res.json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error
        })
        return
    }


    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    
    const errorThrown = false;
    try
    {
        // password hashing 
        const hashedPassword = await bcrypt.hash(password, 6);
        console.log(hashedPassword);

        await UserModel.create({
            email: email,
            name: name,
            password: hashedPassword
        })
    }
    catch (e)
    {
        res.json({
            message: "User Already Exists"
        })
    }

    if(!errorThrown)
    {
        res.json({
            message: "User Created Successfully."
        })
    }
});

app.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    });

    const passwordMatched = bcrypt.compare(password, user.password);

    if(passwordMatched){   
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