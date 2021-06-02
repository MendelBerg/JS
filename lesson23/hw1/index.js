/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-syntax */

const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

function renderTasks(tasksList) {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.addEventListener('click', event => toggleTask(event.target));

      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
}



function toggleTask(checkbox) {
  checkbox.parentElement.classList.toggle('list__item_done');

  for (const el of tasks) {
    if (el.text === checkbox.parentElement.textContent) {
      el.done = !el.done;
      break;
    }
  }

  refreashList();
}



function createTask() {
  const inputElem = document.querySelector('.task-input');
  if (!inputElem.value) {
    return null;
  }

  tasks.push({ text: inputElem.value, done: false });
  inputElem.value = '';
  refreashList();
  return undefined;
}

function refreashList() {
  const listElem = document.querySelector('.list');
  listElem.innerHTML = '';

  renderTasks(tasks);
}

const btnCreate = document.querySelector('.create-task-btn');
btnCreate.addEventListener('click', createTask);
renderTasks(tasks);
