import { PrismaClient } from '@prisma/client'
import { NewsListSearchParams } from "@/types/News";


export async function getNews(params:NewsListSearchParams) {
  const prisma = new PrismaClient();
  if(params === undefined)
    return await prisma.news.findMany();

  return await prisma.news.findMany({
    where:{
      news_category_id: params?.category ? parseInt(params?.category) : null
    }
  })    
}

export async function getNewsEntry(id:number) {
  const prisma = new PrismaClient();
  console.log("id",id)
  return await prisma.news.findUnique({
    where: {
      id,
    },
  })
}
