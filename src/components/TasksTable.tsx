import { useSelector } from 'react-redux';

import { State} from '../state'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import TastRow from "./TaskRow"


export default function TasksTable() {

  const rows = useSelector((state: State) => state.tasks) 
    
  return (
    <TableContainer
      sx={{
        background: 'lightblue',
        
      }}>
      <Table
        sx={{
          tableLayout: 'fixed',
          minWidth: 600,
          width: '100%'
        }}
      >
        <TableHead>
          <TableRow >
            <TableCell sx={{ width: 90 }}>Elapsed time</TableCell>
            <TableCell>Name</TableCell>
            <TableCell sx={{ width: 75 }}>Status</TableCell>
            <TableCell sx={{ width: 75 }}></TableCell>
            <TableCell sx={{ width: 75 }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={{
              
            }}>
            {rows.map((row) => (
              <TastRow row={row} key={ row.id} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
