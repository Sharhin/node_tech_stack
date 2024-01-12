import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { getNewsCategoryEntry } from '@/dataStorage/newsCategory';
import z from "zod";

const schema = z.object({
  name: z.string(),
  description: z.string(),
  news_category_id: z.number(),
});


export async function GET(request: Request, context: any) {
  const { params } = context;
  const paramId = z.coerce.number().parse(params.id)

  const news = await getNewsCategoryEntry(paramId);
  return NextResponse.json(news);
}

export async function PUT(request: Request, context: any) {
  const { params } = context;

  const paramId = z.coerce.number().parse(params.id)

  const rawData = await request.json();
  const data = schema.parse(rawData);

  const prisma = new PrismaClient();
  const newEntry = await prisma.news_category.update({
    where:{
      id: paramId
    },
    data,
  });

  return NextResponse.json(newEntry)
}

export async function DELETE(request: Request, context: any) {
  const { params } = context;
  const prisma = new PrismaClient();
  const deletedEntry = await prisma.news_category.delete({
    where:{
      id: parseInt(params.id)
    }
  });
  return NextResponse.json({done:true})
}