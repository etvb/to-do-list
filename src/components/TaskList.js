import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/taskList.css';

const TaskList = ({task, deleteTask, index, upload}) => {

  const [uploadTask, setUploadTask] = useState(task)
  
  function handleChange(e) {
    if(uploadTask !== ''){
      setUploadTask( e.target.value);
    }  
  }

  function submitTaskList(){
    if(uploadTask !== ''){
      upload(uploadTask, index);
    }
  }

return(
    <>
    <div className="Task-container">
      <li className="Task-li" >{task} </li>
        <input type="text" value={uploadTask} onChange={handleChange}/>
        <div className="Container-buttons">
          <button>
            <i className="fas fa-check"></i>
          </button>
          <button onClick={() => submitTaskList()}>
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button onClick={() => deleteTask(index)}>
            <i className="far fa-trash-alt"></i> 
          </button>
        </div>
    </div>
    </>
  );
}

// TaskList.propTypes = {
//   tasks: PropTypes.array.isRequired,
//   deleteTask: PropTypes.func.isRequired

// }

export default TaskList;