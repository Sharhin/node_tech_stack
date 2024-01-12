import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { getNews } from '@/dataStorage/news';
import z from "zod";

const schema = z.object({
  name: z.string(),
  description: z.string(),
  news_category_id: z.number(),
});

/**
 * @swagger
 * /api/news:
 *   get:
 *     description: Returns News[]
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET() {
  const news = await getNews();
  return NextResponse.json(news);
}

/**
 * @swagger
 * /api/news:
 *   post:
 *     description: Returns News[]
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function POST(request: Request) {
  try {
    const rawData = await request.json()
    const data = schema.parse(rawData);
    const prisma = new PrismaClient();
    const newTask = await prisma.news.create({
      data,
    });
    return NextResponse.json(newTask)
  }
  catch(err){
    const response:any = {
      error:err,
    }
    if (err instanceof z.ZodError) {
      response.issues = err.issues;
    }

    return NextResponse.json(
      response,
      {status: 500 }
    )
  }
}