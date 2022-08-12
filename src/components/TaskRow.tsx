import { useDispatch } from 'react-redux';

import Task from '../state/state.types/tasks';

import {
  TableCell,
  TableRow,
  Button
} from "@mui/material";
import normalizeElapsedTime from "../utils/normalizeElapsedTime"
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

const TaskRow = ({ row }: { row: Task }) => { 
  
  const dispatch = useDispatch();
  const { taskRemove, taskToggleStatus} = bindActionCreators(actionCreators,dispatch)

    return (
        <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                background: row.isDone? 'lightgrey': ''
                  
              }}
        >
          <TableCell>
            {
              normalizeElapsedTime(row.createdAt)
            }
          </TableCell>
           <TableCell>
           {row.name}
          </TableCell> 
          <TableCell>
            {
              row.isDone
              ? "in porocess"
                : "done"
            }
          </TableCell>
          <TableCell>    
                <Button
                  onClick={() => taskToggleStatus(row) }
                  variant="contained"
                  sx={{
                    background: row.isDone ? 'Green' : 'Yellow',
                    "&:hover": {
                        backgroundColor: row.isDone ? 'Green' : 'Yellow',
                        opacity: '.9'
                    }
                  }}
                >
                  {row.isDone ? "Open" : "Close"}
             </Button>
            </TableCell>
            <TableCell>
                  <Button
                    onClick={() => taskRemove(row) }            
                    variant="contained"
                    sx={{
                      background: 'red',
                      "&:hover": {
                          backgroundColor: "red",
                          opacity: '.9'
                      }
                    }}>
                      Delete
                  </Button>      
            </TableCell>
          </TableRow>
    )
    
}

export default TaskRow;