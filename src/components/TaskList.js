import React from 'react';
import '../css/taskList.css';

const TaskList = ({tasks, deleteTask}) => {


return(
    <>
      {tasks.length > 0 ?
       
       <h2>Tareas</h2>
      
      :  
      
      <h2>Sin Tareas</h2>
    }
      

      {tasks.map((task, index) => {
        return (
          <div className="Task-container" key={index}>
            <li className="Task-li" >{task} </li>
            <div className="Container-buttons">
              <button>
                <i className="fas fa-check"></i>
              </button>
              <button>
                <i className="fas fa-pencil-alt"></i>
              </button>
              <button onClick={() => deleteTask(index)}>
                <i className="far fa-trash-alt"></i> 
              </button>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default TaskList;