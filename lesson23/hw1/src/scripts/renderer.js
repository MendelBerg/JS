/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
import { tasks } from './tasks.js';

export const createCheckbox = done => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  checkboxElem.addEventListener('click', event => toggleTask(event.target));

  return checkboxElem;
};

export const createLiElem = (done, checkboxElem, text, id) => {
  const liElem = document.createElement('li');
  liElem.classList.add('list__item');
  liElem.setAttribute('data-id', id);
  liElem.append(checkboxElem, text);

  if (done) {
    liElem.classList.add('list__item_done');
  }

  return liElem;
};

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

