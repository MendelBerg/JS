/* eslint-disable import/no-cycle */
import { toggleTask } from './task.js';

export const createCheckbox = done => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  checkboxElem.addEventListener('click', event => toggleTask(event.target));

  return checkboxElem;
};
