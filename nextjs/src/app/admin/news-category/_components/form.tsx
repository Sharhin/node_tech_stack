"use client"

import { useForm, SubmitHandler} from "react-hook-form"
import { NewsCategoryType } from "@/types/News";
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';


type Inputs = NewsCategoryType

type NewsPageAdminPropsType = {
  params:{
    id:number
  }
}

interface NewsPageAdminFormType extends NewsPageAdminPropsType {
  data:any,
  onSubmit: SubmitHandler<Inputs>
}

export default function NewsAdminForm(props:NewsPageAdminFormType){
  const {params,data,onSubmit} = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: data
  })

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
      <Button type="submit" variant="contained">Send</Button>
    </form>
  )
}