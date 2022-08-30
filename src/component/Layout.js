import { AddTask } from './AddTask';
import { TaskLists } from './TaskLists';

export function Layout() {
  return (
    <div>
      <h1>Your Tasks</h1>
      <AddTask />
      <TaskLists />
    </div>
  );
}
