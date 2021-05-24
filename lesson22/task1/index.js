//! скоротити ці 8 рядків ініціалізацій

const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');
const rectElems = [...document.querySelectorAll('.rect')].slice(0, 3);

const cleareElem = (elem = eventsListElem) => elem.innerHTML = '';

cleareElem();

function logTarget (text, color) {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

//!забрати подальші 6 ініціалізацій змінних, текст можена через масив[дів, п, спан] текст хай буде, там і так два рядки у toggleEvents

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const eventsArr = [[logGreyDiv, logGreenDiv], [logGreyP, logGreenP], [logGreySpan, logGreenSpan]];


function toggleEventsRect(add = true) {
  const toggleListener = (context, ...args) => add 
  ? context.addEventListener(...args) 
  : context.removeEventListener(...args);

  for (let i = 0; i < rectElems.length; i+=1) {
    toggleListener(rectElems[i], 'click', eventsArr[i][0], true);
    toggleListener(rectElems[i], 'click', eventsArr[i][1]);
  }
}

toggleEventsRect();

clearBtn.addEventListener('click', () => cleareElem());

removeBtn.addEventListener('click', () => toggleEventsRect(false));

attachBtn.addEventListener('click', () => toggleEventsRect());
