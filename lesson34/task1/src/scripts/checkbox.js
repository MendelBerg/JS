/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-syntax */
import { getItem, setItem } from './storage.js';
import { refreashList } from './tools.js';

function toggleTask(checkbox) {
  const tasks = getItem('tasksList');
  checkbox.parentElement.classList.toggle('list-item_done');

  for (const el of tasks) {
    if (el.text === checkbox.parentElement.textContent) {
      el.done = !el.done;
      el.date = Date.now();
      break;
    }
  }

  setItem(tasks);
  refreashList(getItem());
}

export const createCheckbox = (done) => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list-item-checkbox');
  checkbox.addEventListener('click', event => toggleTask(event.target));

  return checkbox;
};
