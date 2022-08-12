import { Container } from "@mui/system";
import TasksTable from "./components/TasksTable";
import TaskInput from './components/TaskInput'


function App() {
  return (
    <Container >
      <h1 style={{textAlign: 'center'} }>Tasks Table</h1>
      <TaskInput/>
      <TasksTable />
    </Container>
    
  );
}

export default App;
