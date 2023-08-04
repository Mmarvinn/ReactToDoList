import { useEffect, useState } from "react";
import Task from "./Task";
import PropTypes from "prop-types";

function TaskList({ tasks, deleteTask, completeTask, editTask, appHeight }) {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(appHeight());

    const handleResize = () => {
      setHeight(appHeight());
    };

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tasks]);

  return (
    <>
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
      <div
        className='border-div'
        style={{
          height: `${height}vh`,
        }}
      ></div>
    </>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  handlers: PropTypes.object,
};

export default TaskList;
