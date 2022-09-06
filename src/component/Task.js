import styles from './Task.module.css';

function Task({ text, deleteTask, completeTask, id, done }) {
  return (
    <div className={styles.task}>
      <input type="checkbox" onClick={completeTask} />
      <h3 className={done ? styles.complete : styles.uncomplete}>{text}</h3>
      <button onClick={deleteTask} id={id}>
        Del
      </button>
    </div>
  );
}

export default Task;
