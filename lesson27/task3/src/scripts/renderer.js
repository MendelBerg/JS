import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');

  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  listItemElem.append(createCheckbox(done), text);

  return listItemElem;
};

export const renderTask = () => {
  const taskList = getItem('taskList') || [];

  listElem.innerHTML = '';
  const tasksElems = taskList.map(createListItem);

  listElem.append(...tasksElems);
};
