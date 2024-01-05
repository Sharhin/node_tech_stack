"use client"

import { Paper } from "@mui/material"
import { FormControl } from '@mui/material';

import { useForm, SubmitHandler } from "react-hook-form"
import { requestApi, JSONValue } from "@/app/components/RequestAPI";
import { NewsType } from "@/types/News";
import { useCallback, useEffect, useState } from "react";
type Inputs = NewsType

type NewsPageAdminPropsType = {
  params:{
    id:number
  }
}

interface NewsPageAdminFormType extends NewsPageAdminPropsType {

}

export default function NewsPageAdmin(props:NewsPageAdminPropsType){
  const {params} = props;
  return <Paper>
    <NewsPageAdminForm 
      params={params}
    />
  </Paper>
}

function NewsPageAdminForm(props:NewsPageAdminFormType){
  const {params} = props;
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: async ()=>{
      const response = await requestApi({url: `/api/news/${params.id}`,method:"GET"});
      const rows = await response.json();
      return rows;
    }
  })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const {id,...rest} = data;
    const formData = rest as JSONValue;
    requestApi({url:`/api/news/${params.id}`,method:"PUT"},formData)
  };


  // console.log(watch("name")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("name",{required:true})} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("description", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.name && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )

  return <Paper>
    <FormControl />
  </Paper>
}