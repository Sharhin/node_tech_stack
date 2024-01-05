import { NewsType } from "@/types/News";
import { PrismaClient } from '@prisma/client'
import Link from "next/link";
type NewsListProps = {
  news: NewsType[]
}

type NewsListItemProps = {
  news: NewsType
}

// import { NextResponse } from 'next/server';


export async function GET(request: Request, context: any) {
  const { params } = context;
  const prisma = new PrismaClient();

  return await prisma.news.findUnique({
    where: {
      id: parseInt(params.id),
    },
  })
}

const getData = ()=>{

}

export const NewsList = (props:NewsListProps)=>{

  const {news} = props;

  return <>
    <div>
      name: test
      <div>
        {news.map(newsEntry=>(
          <NewsListItem key={newsEntry.id} news={newsEntry} />
        ))} 
      </div>
    </div>
  </>
}

const NewsListItem = (props:NewsListItemProps)=>{

  const {news} = props;
  const {id,name,description} = news;

  return <>
    <div>
      <Link href={`/news/${id}`}>{name}</Link>
      name: {name}
      description: {description}
    </div>
  </>
}
