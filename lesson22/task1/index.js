/* eslint-disable array-callback-return */

const rectElems = [...document.querySelectorAll('.rect')].slice(0, 3);
const eventsListElem = document.querySelector('.events-list');
const btnElems = document.querySelectorAll('.btn');

function logTarget(text, color) {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const textArr = ['DIV', 'P', 'SPAN'];

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

btnElems[0].addEventListener('click', () => clearList());

btnElems[1].addEventListener('click', () => toggleEventsRect(false));

btnElems[2].addEventListener('click', () => toggleEventsRect());
