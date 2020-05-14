/* eslint-disable no-param-reassign */
const { nextId, tasks } = require('./action');

module.exports = (state, action) => {
  state = state || {
    nextId,
    tasks,
  };
  switch (action.type) {
    case 'ADD_TASK':
      state.tasks = [...state.tasks, action.value];
      state.nextId += 1;
      break;
    case 'FINISH_TASK':
      state.tasks = state.tasks.map((task) => {
        if (task.id === parseInt(action.value, 10)) task.done = !task.done;
        return task;
      });
      break;
    case 'DELETE_TASK':
      state.tasks = state.tasks.filter(task => task.id !== action.value);
      break;
    case 'CLEAR_COMPLETED_TASKS':
      state.tasks = state.tasks.filter(task => !task.done);
      break;
    default:
      break;
  }
  return state;
};
