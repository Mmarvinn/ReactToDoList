import { useState } from 'react';
import TaskList from './TaskList';

function TaskForm() {
  const [task, setTask] = useState('');

  function handlerSubmit(event) {
    event.preventDefault();
    const value = event.target.taskValue.value;
    setTask(value);
    document.querySelector('form').reset();
  }

  return (
    <form className="form" onSubmit={handlerSubmit}>
      <button>All tusks</button>
      <input type="text" placeholder="Add a task" name="taskValue" />
      <TaskList text={task} />
    </form>
  );
}

export default TaskForm;
