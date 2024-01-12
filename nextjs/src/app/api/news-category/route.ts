import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { getNewsCategory } from '@/dataStorage/newsCategory';
import z from "zod";

const schema = z.object({
  name: z.string(),
  description: z.string(),
  news_category_id: z.number(),
});

export async function GET() {
  const news = await getNewsCategory();
  return NextResponse.json(news);
}

export async function POST(request: Request) {
  const { name, description } = await request.json();
  const prisma = new PrismaClient();

  const newTask = await prisma.news_category.create({
    data: {
      name,
      description,
    },
  });
  return NextResponse.json(newTask)
}