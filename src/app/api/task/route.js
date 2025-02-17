import {prisma} from '@/lib/prisma'
import { NextResponse } from "next/server"

export async function GET(){
    try {
        const task = await prisma.task.findMany()
        return NextResponse.json(task)
    } catch (error) {
        console.log(error.message)
    }
}
export async function POST(request){
    try {
        const {title, description} = await request.json()
        const newTask = await prisma.task.create({
            data: {
                title,
                description
            }
        })
        return NextResponse.json(newTask)
    } catch (error) {
        console.log(error.message)
    }
}