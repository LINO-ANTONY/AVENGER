import { Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tablearray = () => {
  return (
    <div>
      <typography variant='h3'>TABLE ARRAY</typography>
      <TableContainer>
       <Table>
         <TableHead>
            <TableRow>
                <TableCell style={{color:"red"}}>name
                    
                </TableCell>
            </TableRow>
            </TableHead>
            </Table>
            </TableContainer>  
    </div>
  )
}

export default Tablearray