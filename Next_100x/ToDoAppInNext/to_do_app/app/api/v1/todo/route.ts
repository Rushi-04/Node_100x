import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
    const todos = await prisma.todo.findMany();
    return NextResponse.json({
        message: "Extracted all todos from db.",
        data: todos
    });
}