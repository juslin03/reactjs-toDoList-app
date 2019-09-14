export const getInitialTasks = () => {
  return {
    type: "GET_TASKS"
  };
};

export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    task
  };
};
