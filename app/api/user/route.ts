import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { json } from "stream/consumers";
import bcrypt from 'bcrypt'

export async function POST(req: Request) {
    const { email, name, password } = await req.json();
    if (!name || !email || !password) {
        console.log(name, email, password)
        return NextResponse.json({ error: 'email and password are requiree' }, { status: 500 })
    }
    try {
        // const password = await bcrypt.hash(password, 10)
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword
            }
        })
        console.log('user created')
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({ error: 'could not create user' })
    }
}

export async function GET() {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({ error: "could not found users" })
    }
}