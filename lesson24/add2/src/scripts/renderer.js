/* eslint-disable import/no-cycle */
import { tasks } from './tasks.js';
import { toggleTask } from './index.js';

const listElem = document.querySelector('.list');

export const createCheckbox = done => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  checkbox.addEventListener('click', event => toggleTask(event.target));

  return checkbox;
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
  const sorteredTaskList = [
    ...tasksList.filter(task => task.done === false),
    ...tasksList.filter(task => task.done === true).sort((a, b) => b.date - a.date),
  ];

  const tasksElems = sorteredTaskList.map(({ text, done }, index) =>
    createLiElem(done, createCheckbox(done), text, index + 1),
  );

  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};
