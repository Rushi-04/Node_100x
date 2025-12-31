/*

List of commands :-

npm init -y
npm install typescript
npx tsc --init

edit tsconfig.json  -- rootDir-> src and outDir-> dist
tsc -b

then set :-
dev: "tsc -b && node ./dist/index.js"

npm install prisma

npx prisma init

npx prisma migrate dev
npx prisma generate

*/

import { todo } from "node:test"
import {prisma} from "./lib/prisma.js"

async function createUser () {
    await prisma.user.create({
        data: {
            username: "Rushi",
            password: "python",
            firstname: "Rushikesh",
            lastname: "Borkar"
        },

    })
}


// createUser();