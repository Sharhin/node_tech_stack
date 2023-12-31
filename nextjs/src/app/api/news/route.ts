import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { getNews } from '@/dataStorage/news';

export async function GET() {
  const news = await getNews();
  return NextResponse.json(news);
}

export async function POST(request: Request) {
  const { name, description } = await request.json();
  const prisma = new PrismaClient();

  const newTask = await prisma.news.create({
    data: {
      name,
      description,
    },
  });
  return NextResponse.json(newTask)
}