/* eslint-disable import/no-cycle */
import { renderTasks } from './todoList.js';
import { tasks } from './storage.js';

export function refreashList() {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';

  renderTasks(tasks);
}
