import { useState } from "react";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../state';

import { TextField, Button, Box } from "@mui/material"


const TaskInput = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const { taskAdd } = bindActionCreators(actionCreators, dispatch)

    function handleAdd() {  
        if (!name) return;
        taskAdd(name)
        setName('')
    }
    
    return (
        <Box
            sx={{
                margin: '20px 0',
                display: 'flex',
                justifyContent: 'center'
            }}>
            <TextField
                onChange={(e) => setName(e.target.value)}
                value={name}
                size='small'
                label="Task name"
                variant="outlined" />
            <Button
                onClick={handleAdd}
                variant="contained"
                size='medium'    
                sx={{
                    background: 'green',
                    marginLeft: '20px',
                    "&:hover": {
                        backgroundColor: "green",
                        opacity: '.9'
                    }
                }}
                >
                Add
            </Button>
        </Box>
    )

}

export default TaskInput;