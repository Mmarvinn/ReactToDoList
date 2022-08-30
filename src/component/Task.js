import styles from './Task.module.css';

function Task({ text }) {
  return (
    <div className={styles.task}>
      <h3>{text}</h3>
      <button>Del</button>
    </div>
  );
}

export default Task;
