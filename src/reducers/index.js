export default (state, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return { ...state };

    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.task]
      };

    default:
      return state;
  }
};
