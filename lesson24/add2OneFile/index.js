/* eslint-disable no-use-before-define */
const tasks = [
  { text: 'Buy milk', done: false, date: Date.now() },
  { text: 'Pick up Tom from airport', done: false, date: Date.now() },
  { text: 'Visit party', done: false, date: Date.now() },
  { text: 'Visit doctor', done: true, date: Date.now() },
  { text: 'Buy meat', done: true, date: Date.now() },
];

const listElem = document.querySelector('.list');

const createCheckbox = done => {
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  checkbox.addEventListener('click', event => toggleTask(event.target));

  return checkbox;
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
  const sorteredTaskList = [
    ...tasksList.filter(task => task.done === false),
    ...tasksList.filter(task => task.done === true).sort((a, b) => b.date - a.date),
  ];

  const tasksElems = sorteredTaskList.map(({ text, done }, index) =>
    createLiElem(done, createCheckbox(done), text, index + 1),
  );

  listElem.innerHTML = '';
  listElem.append(...tasksElems);
};

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

function toggleTask(checkbox) {
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
}

const btnCreate = document.querySelector('.create-task-btn');
btnCreate.addEventListener('click', createTask);

renderTasks(tasks);
