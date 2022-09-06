import { useState } from 'react';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid';

function TaskForm() {
  const [tasks, setTasks] = useState([]);

  function handlerSubmit(event) {
    event.preventDefault();
    const value = event.target.taskValue.value;
    setTasks((prevTasks) => {
      if (value) {
        return [
          ...prevTasks,
          { value, id: uuidv4(), set: setTasks, done: false },
        ];
      }
    });
    document.querySelector('form').reset();
  }

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <button>All tasks</button>
      <input type="text" placeholder="Add a task" name="taskValue" />
      <TaskList tasks={tasks} />
    </form>
  );
}

export default TaskForm;
