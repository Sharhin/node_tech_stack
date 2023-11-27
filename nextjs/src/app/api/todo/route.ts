import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'


export async function GET() {
  const prisma = new PrismaClient();
  const todo = await prisma.todo.findMany();
  return NextResponse.json(todo);
}

export async function POST(request: Request) {
  const { title, description } = await request.json();
  const prisma = new PrismaClient();

  const newTask = await prisma.todo.create({
    data: {
      title,
      description,
    },
  });




  return NextResponse.json(newTask)
}