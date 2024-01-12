"use client"

import { useCallback,useEffect,useState } from "react";
import { Paper } from "@mui/material"
import { FormControl } from '@mui/material';

import { useForm, SubmitHandler} from "react-hook-form"
import { requestApi, JSONValue } from "@/app/components/RequestAPI";
import { NewsCategoryType, NewsType } from "@/types/News";

import NewsAdminForm from "../_components/form";

type Inputs = NewsType

type NewsPageAdminPropsType = {
  params:{
    id:number
  }
}

interface NewsPageAdminFormType extends NewsPageAdminPropsType {
  data:any,
  onSubmit: SubmitHandler<Inputs>
}



export default function NewsPageAdmin(props:NewsPageAdminPropsType){
  const {params} = props;
  const [categories,setCategories] = useState<NewsCategoryType[]>([]);

  const getData = async ()=>{
    const response = await requestApi({url: `/api/news/${params.id}`,method:"GET"});
    const rows = await response.json();
    return rows;
  }

  const getCategories = useCallback(async()=>{
    const response = await requestApi({url: `/api/news-category`,method:"GET"});
    const result =  await response.json();
    setCategories(result);
  },[])

  useEffect(()=>{
    getCategories();
  },[])

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {id,...rest} = data;
    const formData = rest as JSONValue;
    requestApi({url:`/api/news/${params.id}`,method:"PUT"},formData)
  };

  return <Paper>
    <NewsAdminForm 
      params={params}
      data={getData}
      categories={categories}
      onSubmit={onSubmit}
    />
  </Paper>
}