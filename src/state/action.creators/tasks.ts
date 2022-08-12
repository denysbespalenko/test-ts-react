import { Dispatch } from "redux"

import Action from "../actions/tasks"
import ActionTypes from "../action.types/tasks"
import TaskType from "../state.types/tasks"


export const  taskAdd = (task: string) => { 
    return (dispatch: Dispatch<Action>) => { 
        dispatch({
            type: ActionTypes.TASK_ADD,
            payload: task
        })
    }
}

export const  taskRemove = (task: TaskType) => { 
    return (dispatch: Dispatch<Action>) => { 
        dispatch({
            type: ActionTypes.TASK_REMOVE,
            payload: task
        })
    }
}

export const  taskToggleStatus = (task: TaskType) => { 
    return (dispatch: Dispatch<Action>) => { 
        dispatch({
            type: ActionTypes.TASK_TOGGLE_STATUS,
            payload: task
        })
    }
}
