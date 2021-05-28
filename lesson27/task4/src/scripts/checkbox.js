/* eslint-disable import/no-cycle */
/* eslint-disable no-restricted-syntax */
import { tasks, setTask } from './storage.js';
import { refreashList } from './tools.js';

function toggleTask(checkbox) {
  checkbox.parentElement.classList.toggle('list__item_done');
  console.log('task bef: ', tasks, typeof tasks);

  for (const el of tasks) {
    if (el.text === checkbox.parentElement.textContent) {
      console.log('el bef ', el);

      el.done = !el.done;
      el.date = Date.now();
      console.log('el aft', el);

      break;
    }
  }
  console.log('task aft: ', tasks, typeof tasks);
  // setTask(tasks);

  refreashList();
}

export const createCheckbox = done => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  checkbox.addEventListener('click', event => toggleTask(event.target));

  return checkbox;
};
