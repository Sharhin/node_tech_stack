"use client"

import { Paper } from "@mui/material"
import { FormControl } from '@mui/material';

import { useForm, SubmitHandler} from "react-hook-form"
import { requestApi, JSONValue } from "@/app/components/RequestAPI";
import { NewsType } from "@/types/News";

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

  const getData = {}

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {id,...rest} = data;
    const formData = rest as JSONValue;
    requestApi({url:`/api/news-category/`,method:"POST"},formData)
  };

  return <Paper>
    <NewsAdminForm 
      params={params}
      data={getData}
      onSubmit={onSubmit}
    />
  </Paper>
}