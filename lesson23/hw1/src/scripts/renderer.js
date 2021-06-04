import { tasks } from './tasks.js';
import { toggleTask } from './index.js';

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
