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

  return checkboxElem;
};

const createLiElem = (done, checkboxElem, text) => {
  const liElem = document.createElement('li');
  liElem.classList.add('list__item');
  liElem.append(checkboxElem, text);

  if (done) {
    liElem.classList.add('list__item_done');
  }

  return liElem;
};

const renderListItems = tasksList => {
  const listElem = document.querySelector('.list');

  const liElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => createLiElem(done, createCheckbox(done), text));

  listElem.append(...liElems);
};

renderListItems(tasks);
