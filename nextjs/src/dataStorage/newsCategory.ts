import { PrismaClient } from '@prisma/client'


export async function getNewsCategory() {
  const prisma = new PrismaClient();
  return await prisma.news_category.findMany();
}

export async function getNewsCategoryEntry(id:number) {
  const prisma = new PrismaClient();
  return await prisma.news_category.findUnique({
    where: {
      id,
    },
  })
}
