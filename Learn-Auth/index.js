const express = require('express');
const app = express();


app.use(express.json());

let user = [
    {
        username: "Rushi",
        password: "32321221",
        token: "fefy8g326gfb3f7tr632rb"
    }
]

app.post('/sign-up', )
