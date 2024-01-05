import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'
import { getNews } from '@/dataStorage/news';

export async function GET() {
  // const prisma = new PrismaClient();
  // const todo = await prisma.news.findMany();
  const news = await getNews();
  return NextResponse.json(news);
}



// export async function POST(request: Request) {
//   const { title, description } = await request.json();
//   const prisma = new PrismaClient();

//   const newTask = await prisma.todo.create({
//     data: {
//       title,
//       description,
//       users_id: 1 
//     },
//   });
//   return NextResponse.json(newTask)
// }