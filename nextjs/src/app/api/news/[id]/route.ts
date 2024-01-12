import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { getNewsEntry } from '@/dataStorage/news';
import z from "zod";



const schema = z.object({
  name: z.string(),
  description: z.string(),
  news_category_id: z.number(),
});

/**
 * @swagger
 * /api/news/id:
 *   get:
 *     description: Returns News[]
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET(request: Request, context: any) {
  const { params } = context;
  const news = await getNewsEntry(parseInt(params.id));
  return NextResponse.json(news);
}

/**
 * @swagger
 * /api/news/id:
 *   put:
 *     description: Returns News[]
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function PUT(request: Request, context: any) {
  const { params } = context;

  const rawData = await request.json();
  const data = schema.parse(rawData);

  const prisma = new PrismaClient();
  const newEntry = await prisma.news.update({
    where:{
      id: parseInt(params.id)
    },
    data,
  });

  return NextResponse.json(newEntry)
}

/**
 * @swagger
 * /api/news/id:
 *   delete:
 *     description: Returns News[]
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function DELETE(request: Request, context: any) {
  const { params } = context;
  const prisma = new PrismaClient();
  
  const deletedEntry = await prisma.news.delete({
    where:{
      id: parseInt(params.id)
    }
  });
  return NextResponse.json({done:true})
}