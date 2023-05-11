import { AppBar,Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar= () => {
  return (
    <div>
       <AppBar>
        <Toolbar><br />

            <Typography sx={{flexGrow:1}}align='left'>trialapp </Typography> <br /> <br />
            <Button> <Link to={'/'}style={{color:"red"}}>state </Link> </Button><br /> <br />
            <Button> <Link to={'/table'}style={{color:"red"}}>Table</Link></Button>
            <Button> <Link to={'/axios'}style={{color:"red"}}>Table</Link></Button>
        </Toolbar>
       </AppBar>
    </div>
  )
}

export default Navbar
