/* eslint-disable consistent-return */
import { renderTask } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = function(e) {
  const isCheckbox = e.target.classList.contains('list__item-checkbox');

  if (!isCheckbox) {
    return undefined;
  }

  const taskList = getItem('taskList');
  const newTasksList = taskList.map(task => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }

    return task;
  });

  setItem('taskList', newTasksList);

  renderTask();
};
