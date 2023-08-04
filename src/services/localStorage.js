const TASKS = "TASKS";

export const getLocalStorageTasks = () => {
  const todos = JSON.parse(localStorage.getItem(TASKS)) || [];

  return todos;
};

export const setLocalStorageTasks = (tasks) => {
  const todos = JSON.stringify(tasks);

  localStorage.setItem(TASKS, todos);
};

// Delete logic if need it

/* export const deleteLocalStorageTasks = () => {
  localStorage.removeItem(TASKS);
}; */
