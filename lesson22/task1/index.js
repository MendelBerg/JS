/* eslint-disable array-callback-return */

const rectElems = [...document.querySelectorAll('.rect')].slice(0, 3);
const eventsListElem = document.querySelector('.events-list');
const btnArr = document.querySelectorAll('.btn');

const textArr = ['DIV', 'P', 'SPAN'];

function logTarget(text, color) {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const eventsObj = {
  grey: textArr.map(text => logTarget.bind(null, text, 'grey')),
  green: textArr.map(text => logTarget.bind(null, text, 'green')),
};

function toggleEventsRect(add = true) {
  const toggleListener = (context, ...args) =>
    add ? context.addEventListener(...args) : context.removeEventListener(...args);

  rectElems.map((elem, index) => {
    toggleListener(elem, 'click', eventsObj.grey[index], true);
    toggleListener(elem, 'click', eventsObj.green[index]);
  });
}

const clearList = () => {
  eventsListElem.innerHTML = '';
};

clearList();

toggleEventsRect();

btnArr[0].addEventListener('click', () => clearList());

btnArr[1].addEventListener('click', () => toggleEventsRect(false));

btnArr[2].addEventListener('click', () => toggleEventsRect());
