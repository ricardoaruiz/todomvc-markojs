const store = require('../../store');
const action = require('../../action');

module.exports = class {
  onCreate() {
    this.state = {
      task: '',
      originalTasks: store.getState().tasks,
      tasks: store.getState().tasks,
      itemsLeft: this.calcItensLeft(),
      hasFinished: this.calcItensFinished(),
      filter: 'all',
    };
  }

  onMount() {
    store.subscribe(() => {
      this.setState('originalTasks', store.getState().tasks);
      this.setState('itemsLeft', this.calcItensLeft());
      this.setState('hasFinished', this.calcItensFinished());
      this.filter(this.state.filter);
    });
  }

  calcItensLeft() {
    return store.getState().tasks.reduce((acumulador, item) => {
      acumulador += !item.done ? 1 : 0;
      return acumulador;
    }, 0);
  }

  calcItensFinished() {
    return store.getState().tasks.reduce((acumulador, item) => {
      acumulador += item.done ? 1 : 0;
      return acumulador;
    }, 0);
  }

  handleTaskInput(task) {
    this.setState('task', task);
  }

  filter(type) {
    const filtered = this.state.originalTasks.filter((task) => {
      this.setState('filter', type);
      if (type === 'all') return task;

      if (type === 'active' && !task.done) {
        return task;
      }

      if (type === 'completed' && task.done) {
        return task;
      }
    });
    this.setState('tasks', filtered);
  }

  toggleFinishTask(taskId) {
    store.dispatch(action.finishTask(taskId));
  }

  deleteTask(taskId) {
    store.dispatch(action.deleteTask(taskId));
  }

  clearCompleted() {
    store.dispatch(action.clearCompleted());
  }

  addTask() {
    const description = this.state.task;
    const id = store.getState().nextId;
    this.handleTaskInput('');
    store.dispatch(action.addTask({ id, description, done: false }));
  }
};
