import React from 'react';
import '../css/taskList.css';

const TaskList = ({tasks}) => {
  return(
    <>
      <h2>Sin Tareas</h2>
      

      {tasks.map((task, index) => {
        return (
          <div className="Task-container">
            <li className="Task-li" key={index}>{task} </li>
            <div className="Container-buttons">
              <button>
                <i class="fas fa-check"></i>
              </button>
              <button>
                <i class="fas fa-pencil-alt"></i>
              </button>
              <button>
                <i class="far fa-trash-alt"></i> 
              </button>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default TaskList;