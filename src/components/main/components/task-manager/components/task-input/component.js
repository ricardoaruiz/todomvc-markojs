module.exports = class {
  handleTaskInput(ev) {
    if (ev.key === 'Enter') {
      this.emit('endChange');
    }
    this.emit('change', ev.target.value);
  }
};
