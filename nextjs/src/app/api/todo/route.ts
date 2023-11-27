import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'


export async function GET() {
  const prisma = new PrismaClient();
  const todo = await prisma.todo.findMany();
  return NextResponse.json(todo);
}

export async function POST(request: Request) {
  console.log("route init");
  const { title, description } = await request.json();
  console.log("route 2", title, description);
  const prisma = new PrismaClient();

  const newTask = await prisma.todo.create({
    data: {
      title,
      description,
      users_id: 1 
    },
  });
  return NextResponse.json(newTask)
}