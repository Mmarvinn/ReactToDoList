import { useState } from "react";
import styles from "./Task.module.css";

function Task({ text, deleteTask, completeTask, editTask, done, id }) {
  const [toggle, setToggle] = useState(true);

  function changeTask(id, e) {
    e.preventDefault();
    const value = e.target.taskChange.value;

    setToggle(true);
    editTask(id, value);
  }

  return (
    <div className={done ? styles.task__complete : styles.task}>
      <input
        type='checkbox'
        onChange={() => completeTask(id)}
        checked={done}
        className={styles.task_checkbox}
      />
      {toggle ? (
        <h3
          onDoubleClick={() => setToggle(false)}
          className={done ? styles.complete : styles.uncomplete}
        >
          {text}
        </h3>
      ) : (
        <form onSubmit={(e) => changeTask(id, e)}>
          <input type='text' placeholder='' name='taskChange' />
        </form>
      )}
      <button onClick={() => deleteTask(id)} className={styles.task_button}>
        Del
      </button>
    </div>
  );
}

export default Task;
