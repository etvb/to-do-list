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

  function deleteTask(index) {
    let newTasks = tasks.filter((elemento, indexI) => {
      return indexI  !== index
    });
    setTasks(newTasks)  
  }

  return (
    <div className="App">
      <h1>TAREAS</h1>
      <div className="container">
        <TaskForm  addTask={addTask}/>

        {tasks.length > 0 ? <h2>Tareas</h2> : <h2> Sin Tareas</h2>}

        {tasks.map((task, index) => {
          return(
            <TaskList task={task}
                      key={index}
                      deleteTask={deleteTask}
                      index={index}
            />
          )

        })}
      </div>  
    </div>
  );
}

export default App;
