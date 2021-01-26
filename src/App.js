import React, {useEffect, useState} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// https://mauriciogc.medium.com/react-creando-una-app-to-do-list-con-create-react-app-y-el-hook-usestate-6ae378569705

function App() {

  //Revisamos si localStorage tiene algo, Recuerda que en localStorage
  //solo puede almacenar texto, asi que el texto lo pasamos a JSON
  let beginLocalStorage = JSON.parse(localStorage.getItem('tasksLocalStorage'));

  if(!beginLocalStorage){
    //entra aqui cuando no existe y le asigne un array vacio
    // console.log('no existe el localStorage')
    beginLocalStorage = [];
  }

  const [tasks, setTasks] = useState(beginLocalStorage);

  useEffect( () => {
    //Como al principio tasks es un arreglo vacio, ahora si
    //guardamos en localStorage lo qeu tenga mi estae tasks
    //y el arreglo lo pasamos a texto
    if(beginLocalStorage){
      localStorage.setItem('tasksLocalStorage', JSON.stringify(tasks));
    }
    // console.log('ya cambio TASKS o beginLocalStorage')
  },[tasks, beginLocalStorage]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(index) {
    let newTasks = tasks.filter((elemento, indexI) => {
      return indexI  !== index
    });
    setTasks(newTasks)  
  }

  function upload(uploadTask, indexUpdate){
    // console.log(uploadTask, index);
    let newTasks = tasks.map( (task, index) => {
      if(index === indexUpdate){
        return uploadTask;
      }
      return task
    })
    console.log(newTasks)
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
                      upload={upload}
            />
          )

        })}
      </div>  
    </div>
  );
}

export default App;
