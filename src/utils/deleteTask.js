import { tasks } from '../component/TaskList';

function deleteTask(event) {
  tasks.slice(0, 1);
  console.log(tasks);
}

export default deleteTask;
