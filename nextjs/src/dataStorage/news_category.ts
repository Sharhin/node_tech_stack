import { PrismaClient } from '@prisma/client'


export async function getNewsCategory() {
  const prisma = new PrismaClient();
  return await prisma.news_category.findMany();
}

// export async function getNewsEntry(id:number) {
//   const prisma = new PrismaClient();
//   console.log("id",id)
//   return await prisma.news.findUnique({
//     where: {
//       id,
//     },
//   })
// }
