import { useEffect, useState } from 'react';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid';

function TaskForm() {
  console.log('render');
  const [tasks, setTasks] = useState([]);
  const [doneAll, setDoneAll] = useState(false);
  const [showTasks, setShowTasks] = useState('all');

  const tasksLeft = tasks.filter((task) => task.done === false);
  const completeTasks = tasks.filter((task) => task.done === true);

  function returnTasks() {
    switch (showTasks) {
      case 'all':
        return tasks;
      case 'active':
        return tasksLeft;
      case 'complete':
        return completeTasks;
      default:
        return tasks;
    }
  }

  function showAllTasks() {
    setShowTasks('all');
  }

  function showActiveTasks() {
    setShowTasks('active');
  }

  function showCompletedTasks() {
    setShowTasks('complete');
  }

  function deleteCompleted() {
    setTasks((prevTasks) => prevTasks.filter((task) => task.done === false));
    console.log('deleted');
  }

  function completeAll() {
    setTasks((prevTask) => {
      return prevTask.map((task) => {
        if (doneAll === false) {
          return { ...task, done: true };
        } else {
          return { ...task, done: false };
        }
      });
    });
    setDoneAll(!doneAll);
  }

  function deleteTask(id) {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
  }

  function toggleCompleteTask(id) {
    setTasks((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function handlerSubmit(e) {
    e.preventDefault();
    const value = e.target.taskForm.value;

    if (value) {
      const id = uuidv4();
      setTasks((prevTasks) => {
        return [
          ...prevTasks,
          {
            value,
            id: id,
            done: false,
          },
        ];
      });
    }

    e.target.reset();
  }

  return (
    <>
      <form className="form" onSubmit={handlerSubmit}>
        <button type="button" onClick={completeAll}>
          All tasks
        </button>
        <input type="text" placeholder="Add a task" name="taskForm" />
      </form>
      <TaskList
        tasks={returnTasks()}
        deleteTask={deleteTask}
        completeTask={toggleCompleteTask}
      />
      <div className="footer-app">
        <span>Tasks left: {tasksLeft.length}</span>
        <ul className="footer-app--buttons">
          <li>
            <a onClick={showAllTasks}>All</a>
          </li>
          <li>
            <a onClick={showActiveTasks}>Active</a>
          </li>
          <li>
            <a onClick={showCompletedTasks}>Completed</a>
          </li>
        </ul>
        <button onClick={deleteCompleted}>Delete completed</button>
      </div>
    </>
  );
}

export default TaskForm;
