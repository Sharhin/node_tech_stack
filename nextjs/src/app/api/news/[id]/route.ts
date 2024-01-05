import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { getNewsEntry } from '@/dataStorage/news';

export async function GET(request: Request, context: any) {
  const { params } = context;
  const news = await getNewsEntry(parseInt(params.id));
  return NextResponse.json(news);
}

export async function PUT(request: Request, context: any) {
  const { params } = context;
  const data = await request.json();
  const prisma = new PrismaClient();
  const newTask = await prisma.news.update({
    where:{
      id: parseInt(params.id)
    },
    data,
  });

  return NextResponse.json(newTask)
}