import Task from './Task';
import { useState } from 'react';
import PropTypes from 'prop-types';

function TaskList({ tasks }) {
  function deleteTask(e, id) {
    const setNewTasks = tasks[0].set;
    e.preventDefault();
    setNewTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  }

  function completeTask(id) {
    const setNewTasks = tasks[0].set;
    setNewTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            text={task.value}
            id={task.id}
            deleteTask={(e) => deleteTask(e, task.id)}
            completeTask={() => completeTask(task.id)}
            done={task.done}
          />
        );
      })}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
};

export default TaskList;
