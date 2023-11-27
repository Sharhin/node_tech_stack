import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'


export async function GET(request: Request, context: any) {
  const { params } = context;
  const prisma = new PrismaClient();

  const todo = await prisma.todo.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })
  return NextResponse.json(todo);
}

export async function PUT(request: Request, context: any) {
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