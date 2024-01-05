import PublicLayout from "@/app/_layout/publicLayout";

import { requestApi,RequestApiArgsType } from "../components/RequestAPI";
import { getNews } from "../../dataStorage/news";

import { NewsList } from "./components/list";

export default async function NewsListPage() {

  const news = await getNews();
  return <main>
      Hello World
      <NewsList news={news}/>
  </main>
}