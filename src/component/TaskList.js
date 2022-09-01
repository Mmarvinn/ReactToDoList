import Task from './Task';
import { useState } from 'react';
import PropTypes from 'prop-types';

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            text={task.value}
            id={task.id}
            // handler={deleteTask}
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

// prop.types
