import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <div className="border-bottom Task-container">
      <li className="Task-li" >{task} </li>
        
        <div className="Container-buttons mb-1">
          <button className="btn btn-primary">
            <i className="fas fa-check"></i>
          </button>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${index}`}>
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button onClick={() => deleteTask(index)} className="btn btn-primary">
            <i className="far fa-trash-alt"></i> 
          </button>
        </div>
        
    </div>
    {/* <!-- Modal --> */}
    <div className="modal fade" id={`exampleModal${index}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <input type="text" value={uploadTask} onChange={handleChange}/>
          </div>
          
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={() => submitTaskList()} type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
          </div>
        </div>
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