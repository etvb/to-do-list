import React, { useState } from 'react';

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
      <h2>Nueva Tarea</h2>
      <form onSubmit={handSubmit}>
        <input type="text"
         value={newTask} 
         onChange={handleChange}
         />
        <input type="submit"

        />
      </form>
    </>

  );
}

export default TaskForm;