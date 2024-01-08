"use client"
import { useState,useCallback, useEffect } from "react"
import { requestApi } from "@/app/components/RequestAPI"
import Link from "next/link";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NewsType } from "@/types/News";
import { Container } from "@mui/material";
import {Box}  from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton";

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';

export default function NewsAdminPage(){
  const [rows, setRows] = useState<NewsType[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteModalID, setDeleteModalID] = useState<number>();

  const getData = useCallback(async ()=>{
    const response = await requestApi({url: '/api/news-category',method:"GET"});
    const rows = await response.json();
    setRows(rows);
  },[]);
  const openDeleteModal = useCallback((id:number)=>{
    setDeleteModalOpen(true);
    setDeleteModalID(id)
  },[setDeleteModalOpen])

  const deleteNews = useCallback(async ()=>{
    const response = await requestApi({url: `/api/news-category/${deleteModalID}`,method:"DELETE"});

    setRows(rows.filter( row => {
      return row.id !== deleteModalID
    }))

    closeDeleteModal();
  },[deleteModalID,setDeleteModalID]) 

  const closeDeleteModal = useCallback(()=>{
    setDeleteModalOpen(false);
    setDeleteModalID(undefined);
  },[setDeleteModalOpen])

  useEffect(()=>{
    getData(); 
  },[getData]);  

  return (
    <>
    <Box
      padding={"20px"}
    >
      <Link href="/admin/news-category/add">
        <Button variant="contained">Add</Button> 
      </Link>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Name</TableCell>
            <TableCell></TableCell>
            {/* <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope="row">
                {index+1}
              </TableCell>
              <TableCell align="left">
                <Link href={`/admin/news-category/${row.id}`}>
                {row.name}
                </Link>
              </TableCell>
              <TableCell align="right">
                <IconButton 
                  color="error"
                  onClick={()=>{
                    //TODO: popup
                    openDeleteModal(row.id)
                  }}
                  >
                  <DeleteIcon />
                </IconButton>
              

              </TableCell>
              {/* <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    <DeletePopup
      onAccept={deleteNews}
      onClose={closeDeleteModal}
      open={deleteModalOpen}
      title={"PH Delete"}
      description="PH description"
    />
    </>
  );
}

type DeletePopupType = {
  onAccept: ()=>void;
  onClose: ()=>void;
  open: true;
  title: string;
  description: string;
}

function DeletePopup(props:DeletePopupType){
  const { description,onAccept, onClose, open,title } = props;


  return <Dialog onClose={onClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <Button onClick={onAccept} startIcon={<DeleteIcon />}>Delete</Button>
      {/* <Button onClick={onAccept} >Cancel</Button> */}
  </Dialog>
}