import { TextField } from '@mui/material';
import { getStyleValue } from '@mui/system';
import React, { useState } from 'react'

const Singleusestate= () => {

    var[va11,setval1]=useState({id:"",age:""});
    const inputHandler=(e)=>{
    const{name,value}=e.target
    setval1((va11)=>({...va11,[name]:value}))
    }
    
     return (
    <div>
  
         <TextField label='id'name='id'value={va11.id}onChange={inputHandler}/>
         <br /><br />
         <TextField label='age'name='age'value={va11.age}onChange={inputHandler}/>
         <br /><br />
    id:{va11.id}
    age:{va11.age}
    

    </div>
     )
}

export default Singleusestate