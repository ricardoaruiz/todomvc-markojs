class Action {
  constructor() {
    this.nextId = 4;
    this.tasks = [
      { id: 1, description: 'Task 01', done: false },
      { id: 2, description: 'Task 02', done: true },
      { id: 3, description: 'Task 03', done: true },
    ];
  }

  addTask(task) {
    return { type: 'ADD_TASK', value: task };
  }

  finishTask(taskId) {
    return { type: 'FINISH_TASK', value: taskId };
  }

  deleteTask(taskId) {
    return { type: 'DELETE_TASK', value: taskId };
  }

  clearCompleted() {
    return { type: 'CLEAR_COMPLETED_TASKS' };
  }
}

module.exports = new Action();
