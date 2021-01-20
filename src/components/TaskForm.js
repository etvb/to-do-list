import React, { useState } from 'react';
import '../css/taskForm.css'

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
      <form onSubmit={handSubmit}>
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

export default TaskForm;