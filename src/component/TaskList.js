import Task from './Task';
// import deleteTask from '../utils/deleteTask';
import { useState } from 'react';

function TaskList({ tasks }) {
  console.log(tasks);

  return (
    <div>
      {tasks.map((task) => {
        return <Task key={task.id} text={task.value} id={task.id} />;
      })}
    </div>
  );
}

export default TaskList;

// prop.types
