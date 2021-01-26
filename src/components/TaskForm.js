import React, { useState } from 'react';
import PropTypes from 'prop-types';


function TaskForm({addTask}) {
  
  const [newTask, setNewTask] = useState('');

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function handSubmit(e) {
    if( newTask !== ''){
      //si contienen algo gusrdalo, esto es para evitar guardar valores en blanco
      addTask(newTask);
      setNewTask('');
    }
    e.preventDefault();
  }
  return(
    <>
      <h2 className="Form-title">Nueva Tarea</h2>
      <form className="Taskform" onSubmit={handSubmit}>
        <input type="text"
          className="Form-text"
         value={newTask} 
         onChange={handleChange}
         />
        <input type="submit"
          className="Form-submit"
          value="+"
        />
      </form>
    </>

  );
}
TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired
}

export default TaskForm;