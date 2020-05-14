module.exports = class {
  onCreate() {
    this.state = {
      activeFilter: 'all',
    };
  }

  onMount() {
    this.emit('filter', 'all');
  }

  filter(type) {
    this.setState('activeFilter', type);
    this.emit('filter', type);
  }

  clearCompleted() {
    this.emit('clearCompleted');
  }
};
