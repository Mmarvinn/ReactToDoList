import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskList from "./TaskList";
import {
  getLocalStorageTasks,
  setLocalStorageTasks,
} from "../services/localStorage";

function TaskForm({ appHeight }) {
  const [tasks, setTasks] = useState(getLocalStorageTasks());
  const [doneAll, setDoneAll] = useState(false);
  const [showTasks, setShowTasks] = useState("all");

  const tasksLeft = tasks.filter((task) => task.done === false);
  const completeTasks = tasks.filter((task) => task.done === true);

  function returnTasks() {
    switch (showTasks) {
      case "all":
        return tasks;
      case "active":
        return tasksLeft;
      case "complete":
        return completeTasks;
      default:
        return tasks;
    }
  }

  function editTask(id, text) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (id === task.id) {
          return { ...task, value: text };
        } else {
          return task;
        }
      })
    );
  }

  function showAllTasks() {
    setShowTasks("all");
  }

  function showActiveTasks() {
    setShowTasks("active");
  }

  function showCompletedTasks() {
    setShowTasks("complete");
  }

  function deleteCompleted() {
    setTasks((prevTasks) => prevTasks.filter((task) => task.done === false));
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

  useEffect(() => {
    setLocalStorageTasks(tasks);
  }, [tasks]);

  return (
    <>
      <form className='form' onSubmit={handlerSubmit}>
        <button type='button' onClick={completeAll} className='form_button'>
          All tasks
        </button>
        <input
          type='text'
          placeholder='Add a task'
          name='taskForm'
          className='form_input'
        />
      </form>
      <TaskList
        tasks={returnTasks()}
        deleteTask={deleteTask}
        completeTask={toggleCompleteTask}
        editTask={editTask}
        appHeight={appHeight}
      />
      <div className='footer-app'>
        <span className='footer-app_tasks-left'>
          Tasks left: {tasksLeft.length}
        </span>
        <ul className='footer-app--buttons'>
          <li>
            <a
              onClick={showAllTasks}
              className={
                showTasks === "all" ? "filter filter-active" : "filter"
              }
            >
              All
            </a>
          </li>
          <li>
            <a
              onClick={showActiveTasks}
              className={
                showTasks === "active" ? "filter filter-active" : "filter"
              }
            >
              Active
            </a>
          </li>
          <li>
            <a
              onClick={showCompletedTasks}
              className={
                showTasks === "complete" ? "filter filter-active" : "filter"
              }
            >
              Completed
            </a>
          </li>
        </ul>
        <button onClick={deleteCompleted} className='footer-app_button'>
          Delete completed
        </button>
      </div>
    </>
  );
}

export default TaskForm;
