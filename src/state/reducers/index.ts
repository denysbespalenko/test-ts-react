import { combineReducers } from "redux";
import tasksReduces from './tasksReduces';

const reducers = combineReducers({
    tasks: tasksReduces
})

export default reducers;

export type State = ReturnType<typeof reducers>