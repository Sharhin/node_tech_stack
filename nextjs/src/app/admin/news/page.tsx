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
export default function NewsAdminPage(){
  const [rows,setRows] = useState<NewsType[]>([]);


  useEffect(()=>{
    console.log("co?")
    getData(); 
  },[])

  const getData = useCallback(async ()=>{
    const response = await requestApi({url: '/api/news',method:"GET"});
    const rows = await response.json();
    console.log("rows",rows);
    setRows(rows);
  },[])

  return (
    <Box
      padding={"20px"}
    >
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Name</TableCell>
            {/* <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell scope="row">
                {index+1}
              </TableCell>
              <TableCell align="left">
                <Link href={`/admin/news/${row.id}`}>
                {row.name}
                </Link>
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
  );
}