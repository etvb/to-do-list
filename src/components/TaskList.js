import React from 'react';
import PropTypes from 'prop-types';
import '../css/taskList.css';

const TaskList = ({task, deleteTask, index}) => {

return(
    <>
      { task ?
       
       <h2>Tareas</h2>
      
      :  
      
      <h2>Sin Tareas</h2>
    }

    <div className="Task-container">
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
      

      {/* {tasks.map((task, index) => {
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
      })} */}
    </>
  );
}

// TaskList.propTypes = {
//   tasks: PropTypes.array.isRequired,
//   deleteTask: PropTypes.func.isRequired

// }

export default TaskList;