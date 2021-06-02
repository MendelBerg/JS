import { tasks } from './source.js';
import { renderTasks, createTask } from './task.js';

const btnCreate = document.querySelector('.create-task-btn');
btnCreate.addEventListener('click', createTask);

renderTasks(tasks);
