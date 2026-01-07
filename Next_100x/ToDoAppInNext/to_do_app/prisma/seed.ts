import { PrismaClient, Prisma } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL})

const prisma = new PrismaClient({adapter});

const userData: Prisma.UserCreateInput[] = [
  {
    username: "Rushi",
    email: "rushi@prisma.io",
    password: "Rushi@21",
    todos: {
      create: [
        {
          title: "Join the Prisma Discord",
          description: "join it as soon as posible",
          done: true,
        },
        {
          title: "Go to gym",
          description: "do max pushups",
          done: false
        },
      ],
    },
  },
  {
    username: "Shubhu",
    email: "shubhu@prisma.io",
    password: "Shubhu@21",
    todos: {
      create: [
        {
          title: "do aura farming",
          description: "make it as soon as posible and farm it to get benefits",
          done: false,
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();