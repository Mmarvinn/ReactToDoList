import styles from './Task.module.css';

function Task({ text, deleteTask, completeTask, done, id }) {
  return (
    <div className={styles.task}>
      <input type="checkbox" onChange={() => completeTask(id)} checked={done} />
      <h3 className={done ? styles.complete : styles.uncomplete}>{text}</h3>
      <button onClick={() => deleteTask(id)}>Del</button>
    </div>
  );
}

export default Task;
