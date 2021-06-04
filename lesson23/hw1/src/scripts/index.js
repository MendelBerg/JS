/* eslint-disable consistent-return */
import { tasks } from './tasks.js';
import { renderTasks } from './renderer.js';


const createTask = () => {
  const inputElem = document.querySelector('.task-input');

  if (!inputElem.value) return null;

  tasks.push({ text: inputElem.value, done: false });
  inputElem.value = '';

  renderTasks(tasks);
};

export const toggleTask = checkbox => {
  const liElem = checkbox.parentElement;
  liElem.classList.toggle('list__item_done');

  const index = liElem.dataset.id - 1;
  tasks[index].done = !tasks[index].done;

  renderTasks(tasks);
};


const btnCreate = document.querySelector('.create-task-btn');
btnCreate.addEventListener('click', createTask);



renderTasks(tasks);
