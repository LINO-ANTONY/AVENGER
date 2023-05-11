import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const ViewData = () => {
    var[users,setUsers]=useState([]);
   {axios.get("https://jsonplaceholder.typicode.com/user")
    .then((response)=>{
        console.log(response.data)
        setUsers(response.data)
    })
    .catch((err)=>console.log(err))},[])
  return (
    <div style={{padding:"100px"}}>
      <Typography>Axies view</Typography>
      <TableContainer>
        <Table>
        <TableHead>
            <TableRow>
                    <TableCell>NAME</TableCell>
                    <TableCell>EMAIL</TableCell>

                </TableRow> 
              
                </TableHead>
                <TableBody>{
                   users.map((value,index) => {
                   return(
                    <TableRow key={index}>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.email}</TableCell>
                    </TableRow>
                   )

                   
                   } )
                   }
                </TableBody>
              
           

        </Table>
      </TableContainer>
    </div>
  )
}

export default ViewData
