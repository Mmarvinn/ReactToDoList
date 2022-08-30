import Task from './Task';
import { v4 as uuidv4 } from 'uuid';

const tasks = [];

function TaskList({ text }) {
  tasks.push(text);

  return (
    <div>
      {tasks.map((task) => {
        return <Task key={uuidv4()} text={task} />;
      })}
    </div>
  );
}

export default TaskList;
