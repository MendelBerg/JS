import { getItem, setItem } from './storage.js';
import { refreashList } from './tools.js';

export function createTask() {
  const inputElem = document.querySelector('.task-input');
  if (!inputElem.value) {
    return null;
  }

  const tasks = getItem('tasksList');

  tasks.unshift({
    text: inputElem.value,
    done: false,
    date: Date.now(),
    id: Math.random().toString(),
  });
  setItem('tasksList', tasks);
  inputElem.value = '';
  refreashList(getItem('tasksList'));
  return undefined;
}

const btnCreate = document.querySelector('.create-task-btn');
btnCreate.addEventListener('click', createTask);
