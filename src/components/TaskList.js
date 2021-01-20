import React from 'react';

const TaskList = ({tasks}) => {
  return(
    <>
      <h2>Sin Tareas</h2>

      {tasks.map((task, index) => {
        return (
        <li key={index}>{task}</li>
        )
      })}
    </>
  );
}

export default TaskList;