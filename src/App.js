import React, {useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// https://mauriciogc.medium.com/react-creando-una-app-to-do-list-con-create-react-app-y-el-hook-usestate-6ae378569705

function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }



  return (
    <div className="App">
      <h1>TAREAS</h1>
      <div className="container">
        <TaskForm  addTask={addTask}/>
        <TaskList tasks={tasks}
                  setTasks={setTasks}
        />
        
      </div>  
      
    </div>
  );
}

export default App;
