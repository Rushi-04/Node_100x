import { Client, Pool } from "pg";
import express, { response } from "express";
import {config} from "dotenv";

config();



// ENV DATA
const DATABASE_URL = process.env.PG_CONNECTION_STRING as string;
const USER = process.env.USER as string;
const PASSWORD = process.env.PASSWORD as string;
const PORT = process.env.PORT;
const HOST = process.env.HOST as string;
const DATABASE =process.env.DATABASE as string;

export const pool = new Pool({
    connectionString: DATABASE_URL
});

const app = express();
app.use(express.json());

// u p p h d 

// const pgClient = new Client(PG_CONNECTION_STRING)



// const pgClient = new Client({
//     user: USER,
//     password: PASSWORD,
//     port: 5432,
//     host: HOST,
//     database: DATABASE,
//     ssl: true
// });


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

    const pgClient = await pool.connect();

    try{
        const insertQuery = `INSERT INTO Users (username, email, password) VALUES ($1, $2, $3) RETURNING id ;`
        
        // Begin Transaction
        await pgClient.query('BEGIN;');
        const response = await pgClient.query(insertQuery, [username, email, password]);
        
        // COMMIT Transaction
        await pgClient.query('COMMIT;');

        return res.status(201).json({
            message: "User Added Successfully.",
            userId: response.rows[0].id
        });
    }catch(e){
        await pgClient.query('ROLLBACK'); // Roll back the transaction

        return res.status(500).json({
            message: "Error while signing up!",
            error: (e as Error).message
        });
    }finally{
        pgClient.release();
    }
});

app.get('/all', async(req, res) => {

    const pgClient = await pool.connect();
    try{
        const selectQuery = `SELECT * FROM Users;`
        const response = await pgClient.query(selectQuery);

        return res.status(201).json({
            message: "I got user.",
            res: response.rows
        })
    }catch(e){
        return res.status(403).json({
            message: "Error while looking up!",
            error: (e as Error).message
        });
    }finally{
        pgClient.release()
    }
});

// Joined Data
app.get('/metadata', async (req, res) => {
    const Id = req.query.id;
    const pgClient = await pool.connect();

    try{
        const joinedQuery = `
        SELECT u.id, u.username, u.password, u.email, a.street, a.city, a.country
        FROM Users u JOIN addresses a ON u.id = a.user_id
        WHERE u.id = $1;` 
        const queryResponse = await pgClient.query(joinedQuery, [Id]);
        console.log(queryResponse);

        return res.status(200).json({
            response: queryResponse.rows
        });

    }catch(e){
        return res.status(403).json({
            message: "Error while retrieving data.",
            error: (e as Error).message
        });
    }finally{
        pgClient.release();
    }

}) ;


const main = () => {
    app.listen(3000, () => {
        console.log("Server running on port 3000...")
    });
}

main();