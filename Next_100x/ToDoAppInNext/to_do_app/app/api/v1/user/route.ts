import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json({
        message: "Extracted all users from db.",
        data: users
    });
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    return NextResponse.json({
        message: "Data received properly",
        data: body
    });
}


