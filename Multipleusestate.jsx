import { TextField } from '@mui/material';
import React, { useState } from 'react'
const Multipleusestate = () => {
    var[va11,setval1]=useState()
    const readName1=(e)=>{
        setval1(e.target.value)
}
var[va12,setval2]=useState()
const readname=(e)=>{
    setval2(e.target.value)

}
 return (
<div>
    <br /><br />
    <TextField label='name'onChange={readName1}/>
    <br /><br /> {va11}<br></br>

    <TextField label='name'onChange={readname}/>
<br></br>{va12}










</div>
  )
}

export default Multipleusestate
