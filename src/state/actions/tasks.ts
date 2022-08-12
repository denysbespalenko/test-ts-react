import TaskTypes from '../action.types/tasks'
import Task from '../state.types/tasks'


interface TASK_ADD{
    type: TaskTypes.TASK_ADD,
    payload: string
}

interface TASK_REMOVE{
    type: TaskTypes.TASK_REMOVE,
    payload: Task
}

interface TASK_TOGGLE_STATU{
    type: TaskTypes.TASK_TOGGLE_STATUS,
    payload: Task
}

type Action = TASK_ADD | TASK_REMOVE | TASK_TOGGLE_STATU;


export default Action;