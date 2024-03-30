import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { json } from "stream/consumers";
import bcrypt from 'bcrypt'

export async function POST(req: Request) {
    const { email, name, HashedPassword } = await req.json();
    if (!email || !HashedPassword) {
        return NextResponse.json({ error: 'email and password are requiree' }, { status: 500 })
    }
    try {
        const password = bcrypt.hash(HashedPassword, 10)
        const newUser = await prisma.user.create({
            data: {
                email, name, password
            }
        })
        console.log('user created')
        return NextResponse.json(newUser)
    } catch (error) {
        return NextResponse.json({ error: 'could not create user' })
    }
}