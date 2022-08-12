import TaskTypes from '../action.types/tasks'
import TaskType from '../state.types/tasks'
import Action from '../actions/tasks';



const initialState: TaskType[] = [];

const reducer = (state:TaskType[]= initialState, action: Action) => { 
    switch (action.type) {
        case TaskTypes.TASK_ADD:
            const task: TaskType = {
                id: Date.now() + Math.random(),
                isDone: false,
                name: action.payload,
                createdAt: Date.now()
            }
            return [...state, task];
        
        case TaskTypes.TASK_TOGGLE_STATUS:
            return [
                    ...state.map((task) => {
                        if (task.id === action.payload.id) {
                            return Object.assign(task, {
                                isDone: !task.isDone
                            })
                        }
                        return task
                    })
                ]
        
        case TaskTypes.TASK_REMOVE:
            return state.filter(task => task.id !== action.payload.id);
        
        default:
            return state;
    }
} 

export default reducer;