/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const createCheckbox = done => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  checkboxElem.addEventListener('click', event => toggleTask(event.target));

  return checkboxElem;
};

const createLiElem = (done, checkboxElem, text, id) => {
  const liElem = document.createElement('li');
  liElem.classList.add('list__item');
  liElem.setAttribute('data-id', id);
  liElem.append(checkboxElem, text);

  if (done) {
    liElem.classList.add('list__item_done');
  }

  return liElem;
};

const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');
  listElem.textContent = '';

  const liElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => createLiElem(done, createCheckbox(done), text, index + 1));

  listElem.append(...liElems);
};

function toggleTask(checkbox) {
  const liElem = checkbox.parentElement;
  liElem.classList.toggle('list__item_done');

  const index = liElem.dataset.id - 1;
  tasks[index].done = !tasks[index].done;

  renderTasks(tasks);
}

const createTask = () => {
  const inputElem = document.querySelector('.task-input');

  if (!inputElem.value) return null;

  tasks.unshift({ text: inputElem.value, done: false });
  inputElem.value = '';

  renderTasks(tasks);
};

const btnCreate = document.querySelector('.create-task-btn');
btnCreate.addEventListener('click', createTask);

renderTasks(tasks);
