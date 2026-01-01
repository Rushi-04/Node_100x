import {prisma} from "../lib/prisma.js"


async function main () {
    const user = await prisma.users.create({
        data: {
            username: "Rushikesh",
            password: "Rushikesh@21",
            email: "borkarrushi11@gmail.com",
            todos: {
                create : {
                    title: "go to gym",
                    description: "go to gym and lift 30 kg weight",
                    
                }
            }
        },
        include: {
            todos: true
        }
    })
    console.log("Created user:", user);

}

main()
    .then(async()=>{
        await prisma.$disconnect()
    })
    .catch(async(e)=>{
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
