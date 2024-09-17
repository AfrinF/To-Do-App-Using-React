import logo from './logo.svg';
import './App.css';
import NewTask from './NewTask';
import TaskList from './TaskList';

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <hr></hr>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
