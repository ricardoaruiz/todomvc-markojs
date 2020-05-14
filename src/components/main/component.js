const store = require('./store');
const action = require('./action');

module.exports = class {
  onCreate() {
    this.state = store.getState();
  }

  onMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  increment() {
    store.dispatch(action.increment());
  }

  decrement() {
    store.dispatch(action.decrement());
  }
};
