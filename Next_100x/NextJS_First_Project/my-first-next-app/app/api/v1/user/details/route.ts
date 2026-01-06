import { NextResponse } from "next/server";

// read about default export and constant export  
//  if default 
// -> export default function Home() {} and
// -> import UserForm from "./components/users"
//  if constant 
// -> export function Home() {}
// -> import {UserForm} from "./components/users"

export function GET() {
    return NextResponse.json({
        name: "Rushi",
        email: "rushi@gmail.com"
    })
}

