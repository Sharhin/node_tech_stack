"use client"
import { useMemo } from "react";
import { useForm, SubmitHandler} from "react-hook-form"
import { NewsCategoryType, NewsType } from "@/types/News";
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"


type Inputs = NewsType

type NewsPageAdminPropsType = {
  params:{
    id:number
  }
}

interface NewsPageAdminFormType extends NewsPageAdminPropsType {
  data:any,
  categories: NewsCategoryType[]
  onSubmit: SubmitHandler<Inputs>
}

export default function NewsAdminForm(props:NewsPageAdminFormType){
  const {params,data,categories = [],onSubmit} = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: data
  })

  const MenuItems = useMemo(()=>{
    return categories.map(category=>{
      return <MenuItem value={category.id}>{category.name}</MenuItem>
    })
  },[categories])


  console.log(watch("news_category_id"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>Name</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField {...register("name",{required:true})} />
          <FormHelperText>
            {errors.name && <span>This field is required</span>}
          </FormHelperText>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>Description</FormLabel>
        </Grid>
        <Grid item xs={9}>
          <TextField {...register("description")} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormLabel>Description</FormLabel>
        </Grid>
      </Grid>
      <FormControl fullWidth>
        <InputLabel style={{background:"white"}} id="demo-simple-select-label">Category</InputLabel>
        <Select
          {...register("news_category_id")}
          id="demo-simple-select-label"
        >
          {MenuItems}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained">Send</Button>
    </form>
  )
}