import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request, {params}){
    try {
        const {id} = await params
        const task = await prisma.task.findUnique({
            where: {
                id: Number(id)
            }
        })
        return NextResponse.json(task)
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
export async function PUT(request, {params}){
    try {
        const data = await request.json()
        const {id} = await params
        const task = await prisma.task.update({
        where:{
            id: Number(id)
        },
        data: data
        })
        return NextResponse.json(task)
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
export async function DELETE(request, {params}){
    try {
        const {id} = await params
        await prisma.task.delete({where:{
            id: Number(id)
        }})
        return NextResponse.json("Eliminando tarea: "+ id)
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}