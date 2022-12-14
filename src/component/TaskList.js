import Task from './Task';
import PropTypes from 'prop-types';

function TaskList({ tasks, deleteTask, completeTask, editTask }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            key={task.id}
            text={task.value}
            id={task.id}
            deleteTask={deleteTask}
            completeTask={completeTask}
            done={task.done}
            editTask={editTask}
          />
        );
      })}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  handlers: PropTypes.object,
};

export default TaskList;
