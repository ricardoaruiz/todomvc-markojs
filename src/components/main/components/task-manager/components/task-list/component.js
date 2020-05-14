module.exports = class {
  toggleFinish(ev) {
    this.emit('toggleFinishTask', ev.target.value);
  }

  delete(id) {
    this.emit('deleteTask', id);
  }
};
