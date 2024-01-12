import { NewsCategoryType, NewsType } from "@/types/News";
import { PrismaClient } from '@prisma/client'
import Link from "next/link";
import NewsItem from "./_list_item";

import styles from "./NewsList.module.sass"
import { Typography } from "@mui/material";

type NewsListProps = {
  title?: string
  news: NewsType[]
  category?: NewsCategoryType
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

export const NewsList = (props:NewsListProps)=>{
  const {title = "Any", news, category} = props;
  const pageTitle = category?.name || title;

  return <>
    <div className={styles.news__list__container}>
      <Typography>
        {pageTitle}
      </Typography>
      <br></br>
      <div className={styles.news__list}>
        
        {
          news?.length 
            ? news.map(newsEntry=>(
              <>
                <NewsItem post={newsEntry}/>
              </>
            ))
            : <div>
                <h4>No content yet</h4>
                <p>return  to <Link href="/">homepage</Link></p>

            </div>
        } 
      </div>
    </div>
  </>
}
