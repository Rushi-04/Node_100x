import { Client } from "pg";
import express from "express";

const app = express();
app.use(express.json());

// connection string --> 
// psql 'postgresql://neondb_owner:npg_n0xCuK4qEZTt@ep-curly-lake-a148bhxw-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'

// u p p h d 

// const pgClient = new Client("postgresql://neondb_owner:npg_n0xCuK4qEZTt@ep-curly-lake-a148bhxw-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_n0xCuK4qEZTt",
    port: 5432,
    host: "ep-curly-lake-a148bhxw-pooler.ap-southeast-1.aws.neon.tech",
    database: "neondb",
    ssl: true
});


// async function main(){
//     await pgClient.connect();
//     console.log("connected to db.")

//     const response = await pgClient.query("SELECT * FROM Users;")
//     const response2 = await pgClient.query("INSERT INTO Users(username, email, password) VALUES ('Rishi', 'rishi@gmail.com', 'rishi1213')")
//     const response3 = await pgClient.query("SELECT * FROM Users;")
//     console.log(response.rows);
//     console.log(response2);
//     console.log(response3.rows);
// }

// main();

app.post('/signup', async(req, res) => {
    const {username, email, password} = req.body;

    try{
        const insertQuery = `INSERT INTO Users (username, email, password) VALUES ($1, $2, $3);`
        const response = await pgClient.query(insertQuery, [username, email, password]);

        return res.status(201).json({
            message: "User Added Successfully."
        })
    }catch(e){
        return res.status(403).json({
            message: "Error while signing up!",
            error: (e as Error).message
        });
    }
});

app.get('/all', async(req, res) => {

    try{
        const selectQuery = `SELECT * FROM Users;`
        const response = await pgClient.query(selectQuery);

        return res.status(201).json({
            message: "User goted.",
            res: response.rows
        })
    }catch(e){
        return res.status(403).json({
            message: "Error while looking up!",
            error: (e as Error).message
        });
    }
});

const main = async () => {

    await pgClient.connect()
    console.log("Connected to DB.")

    app.listen(3000, () => {
        console.log("Server running on port 3000...")
    });
}

main();