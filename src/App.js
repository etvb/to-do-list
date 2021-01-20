import React, {useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {

  const [tasks, setTasks] = useState(['jakshd', 'kjshd', 'adkjfk']);

  function addTask(task) {
    setTasks([...tasks, task]);
  }



  return (
    <div className="App">
      <h1>TAREAS</h1>
      <div className="container">
        <TaskForm  addTask={addTask}/>
        <TaskList tasks={tasks}/>
        
      </div>  
      
    </div>
  );
}

export default App;
