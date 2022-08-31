import styles from './Task.module.css';

function Task({ text, handler, id }) {
  return (
    <div className={styles.task}>
      <h3>{text}</h3>
      <button onClick={handler} id={id}>
        Del
      </button>
    </div>
  );
}

export default Task;
