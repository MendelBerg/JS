const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');
const rectElems = [...document.querySelectorAll('.rect')].slice(0, 3);

eventsListElem.innerHTML = '';

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const eventsArr = [
  [logGreyDiv, logGreenDiv],
  [logGreyP, logGreenP],
  [logGreySpan, logGreenSpan],
];

divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv, false);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP, false);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan, false);

clearBtn.addEventListener('click', () => {
  eventsListElem.innerHTML = '';
});

removeBtn.addEventListener('click', () => {
  for (let i = 0; i < rectElems.length; i += 1) {
    rectElems[i].removeEventListener('click', eventsArr[i][0], true);
    rectElems[i].removeEventListener('click', eventsArr[i][1]);
  }
});

attachBtn.addEventListener('click', () => {
  for (let i = 0; i < rectElems.length; i += 1) {
    rectElems[i].addEventListener('click', eventsArr[i][0], true);
    rectElems[i].addEventListener('click', eventsArr[i][1], false);
  }
});
