import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/taskList.css';

const TaskList = ({task, deleteTask, index, upload}) => {

  const [uploadTask, setUploadTask] = useState(task)
  
  function handleChange(e) {
    setUploadTask( e.target.value);
  }

  function handSubmit(e){
    e.preventDefault();
    upload(uploadTask, index);

    
  }

  // let dataList = handleChange();



return(
    <>
    <div className="Task-container">
      <li className="Task-li" >{task} </li>

      <form onSubmit={handSubmit}>
        <input type="text" value={uploadTask} onChange={handleChange}/>

        <div className="Container-buttons">
          {/* <button>
            <i className="fas fa-check"></i>
          </button> */}
          <input type="submit" value="Actualizar" />
          

        </div>
      </form>
      <button>
      <i className="fas fa-pencil-alt"></i>
      </button>
      <button onClick={() => deleteTask(index)}>
        <i className="far fa-trash-alt"></i> 
      </button>
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