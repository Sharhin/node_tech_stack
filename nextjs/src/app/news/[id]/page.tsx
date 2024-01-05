import { getNewsEntry } from "@/dataStorage/news";
import { NewsType } from "@/types/News";

type NewsPageType = {
  params: {
    id: string
  }
}

export default async function NewsPage(props:NewsPageType){
  const { params:{id} }= props;
  const newsEntry = await getNewsEntry(parseInt(id)) as NewsType
  const {name,description} = newsEntry;
  return <main>
    {name} {description}
  </main>
}