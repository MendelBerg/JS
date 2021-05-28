import { renderTask } from './renderer.js';
import { initTodoListHandlers } from './todoList.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTask();
});
initTodoListHandlers();

const onStorageChange = e => {
  if (e.key === 'taskList') {
    renderTask();
  }
};

window.addEventListener('storage', onStorageChange);
