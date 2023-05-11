import { Button, StepButton, TextField, Typography } from '@mui/material'
import React from 'react'

const Basic = () => {
  return (
    <div> 
        <h1>GOOD MORNING</h1>
        <Typography variant='h1'color="red">GOOD MORNING</Typography>
        <br /><br />
        <TextField label="name" variant='outlined'/><br />
        <TextField label="age"  variant='outlined'/><br />
        <br /><br />
        <Button variant='contained'color='secondary' >click me</Button> <br />
        <Button variant='text'color='error'>click me</Button> <br />
        <Button variant="outlined" color='success'>Outlined</Button> <br />
        
        
        



    </div>

        

        
    
  )
}

export default Basic