/* eslint-disable import/no-cycle */
import { createCheckbox } from './checkbox.js';

const listElem = document.querySelector('.list');

const createListItems = taskList =>
  taskList.map(({ text, done, id }) => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list-item', 'list__item');

    if (done) {
      listItemElem.classList.add('list-item_done');
    }

    const textElem = document.createElement('span');
    textElem.classList.add('list-item__text');
    textElem.textContent = text;


    const deleteBtnElem = document.createElement('button');
    deleteBtnElem.classList.add('list-item__delete-btn');
    listItemElem.append(createCheckbox(done, id), textElem, deleteBtnElem);

    return listItemElem;
  });

export function renderTasks(tasksList) {
  console.log(tasksList);
  listElem.append(
    ...createListItems([
      ...tasksList.filter(task => task.done === false),
      ...tasksList.filter(task => task.done === true).sort((a, b) => b.date - a.date),
    ]),
  );
}
