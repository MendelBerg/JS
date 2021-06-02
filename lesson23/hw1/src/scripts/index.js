import { tasks } from './tasks.js';
import { renderTasks, createTask } from './renderer.js';

const btnCreate = document.querySelector('.create-task-btn');
btnCreate.addEventListener('click', createTask);

renderTasks(tasks);
