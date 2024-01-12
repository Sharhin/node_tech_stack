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
  const [categories,setCategories] = useState([]);

  const getData = {}

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {id,...rest} = data;
    const formData = rest as JSONValue;
    requestApi({url:`/api/news/`,method:"POST"},formData)
  };

  const getCategories = useCallback(async()=>{ 
    console.log("cat call")
    const response = await requestApi({url: `/api/news-category`,method:"GET"});
    const result =  await response.json();
    console.log("hi",typeof result);
    setCategories(result);
  },[])

  useEffect(()=>{
    console.log('effect call')
    getCategories();
  },[]);

  return <Paper>
    <NewsAdminForm 
      params={params}
      categories={categories}
      data={getData}
      onSubmit={onSubmit}
    />
  </Paper>
}