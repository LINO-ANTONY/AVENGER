import { Typography, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {

 var[pname,setPname]= useState("sdfg");

 const changeName= ()=>{
    console.log("clicked");
    setPname("lino")
}
  return (
    <div>
       <Typography variant='h3'>welcome {pname}</Typography>
    <TextField label="name" variant='outlined' ></TextField><br />
    < Button variant='contained' onClik={changeName}> change </Button>
       
    </div>
  )
}

export default StateBasics