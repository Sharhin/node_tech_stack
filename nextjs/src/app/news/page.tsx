import PublicLayout from "@/app/_layout/publicLayout";
import { requestApi,RequestApiArgsType } from "../components/RequestAPI";

import { getNews } from "../../dataStorage/news";

import { NewsList } from "./components/list";

import { NewsListSearchParams } from "@/types/News";
import { getNewsCategory, getNewsCategoryEntry } from "@/dataStorage/newsCategory";

export default async function NewsListPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams?: NewsListSearchParams;
}) {
  const news = await getNews(searchParams);
  let category;
  if(searchParams?.category){
     category = await getNewsCategoryEntry(parseInt(searchParams.category));
  }
  
  return <main>
    <NewsList news={news} category={category}/>
  </main>
}