// import {prisma} from "./lib/prisma.js"
// async function main () {
//     const user = await prisma.users.create({
//         data: {
//             username: "Rushi",
//             password: "Rushi@21",
//             email: "borkarrushi@gmail.com",
//             todos: {
//                 create : {
//                     title: "go to gym",
//                     description: "go to gym and lift 30 kg weight",
//                 }
//             }
//         },
//         include: {
//             todos: true
//         }
//     })
//     console.log("Created user:", user);
// }
// main()
//     .then(async()=>{
//         await prisma.$disconnect()
//     })
//     .catch(async(e)=>{
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })
import express from "express";
import z, { email } from "zod";
import { prisma } from "./lib/prisma.js";
const app = express();
app.use(express.json());
async function addUser(username, password, email) {
    try {
        const user = await prisma.users.create({
            data: {
                username: username,
                password: password,
                email: email
            }
        });
        console.log("User created:", user);
        return user;
    }
    catch (e) {
        prisma.$disconnect();
        console.log("error happened", e);
    }
}
app.post('/api/v1/signup', (req, res) => {
    const requiredBody = z.object({
        username: z.string().min(3).max(30),
        password: z
            .string()
            .min(3)
            .max(40)
            .regex(/[A-Z]/)
            .regex(/[a-z]/)
            .regex(/[0-9]/)
            .regex(/[^A-Za-z0-9]/),
        email: z.email({ message: "Invalid email address" })
    });
    const parsedBody = requiredBody.safeParse(req.body);
    if (!parsedBody.success) {
        return res.status(401).json({
            message: "Invalid format"
        });
    }
    const { username, password, email } = req.body;
    const user = addUser(username, password, email);
    if (!user) {
        return res.status(401).json({
            message: "Error, user not created"
        });
    }
    res.status(201).json({
        message: "User created",
        user: user
    });
});
app.post('/api/v1/todo', (req, res) => {
    const requiredBody = z.object({
        title: z.string(),
        description: z.string()
    });
    const parsedBody = requiredBody.safeParse(req.body);
    if (!parsedBody.success) {
        return res.status(401).json({
            message: "Invalid format"
        });
    }
    const { title, description, userid } = req.body;
});
const main = () => {
    app.listen(3000, () => {
        console.log("Listening on port 3000....");
    });
};
main();
//# sourceMappingURL=index.js.map