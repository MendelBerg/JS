/* eslint-disable consistent-return */
import { tasks } from './source.js';
import { createLiElem } from './liElem.js';
import { createCheckbox } from './checkbox.js';

export const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');
  listElem.textContent = '';

  const liElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => createLiElem(done, createCheckbox(done), text, index + 1));

  listElem.append(...liElems);
};

export const toggleTask = (checkbox) => {
  const liElem = checkbox.parentElement;
  liElem.classList.toggle('list__item_done');

  const index = liElem.dataset.id - 1;
  tasks[index].done = !tasks[index].done;

  renderTasks(tasks);
}

export const createTask = () => {
  const inputElem = document.querySelector('.task-input');

  if (!inputElem.value) return null;

  tasks.push({ text: inputElem.value, done: false });
  inputElem.value = '';

  renderTasks(tasks);
};
