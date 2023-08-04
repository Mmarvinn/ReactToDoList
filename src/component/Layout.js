import TaskForm from "./TaskForm";

function Layout({ appHeight }) {
  return (
    <main>
      <h1>Todo List</h1>
      <TaskForm appHeight={appHeight} />
    </main>
  );
}

export default Layout;
