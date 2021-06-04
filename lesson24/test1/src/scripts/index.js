/* eslint-disable import/no-cycle */
import { tasks } from './tasks.js';
import { renderTasks } from './renderer.js';

function createTask() {
  const inputElem = document.querySelector('.task-input');
  if (!inputElem.value) {
    return null;
  }

  tasks.unshift({ text: inputElem.value, done: false, date: Date.now() });
  inputElem.value = '';
  renderTasks(tasks);
  return undefined;
}

export const toggleTask = checkbox => {
  const liElem = checkbox.parentElement;
  liElem.classList.toggle('list__item_done');

  let index;
  tasks.forEach((el, i) => {
    if (el.text === liElem.textContent) {
      index = i;
    }
  });

  tasks[index].done = !tasks[index].done;
  tasks[index].date = new Date();

  renderTasks(tasks);
};

const btnCreate = document.querySelector('.create-task-btn');
btnCreate.addEventListener('click', createTask);

renderTasks(tasks);
