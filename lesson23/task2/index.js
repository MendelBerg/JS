const generateNumbersRange = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }

  return result;
};

const getLineSets = () =>
  generateNumbersRange(1, 10)
    .map(
      seatNumber => `
        <div
          class="sector__seat"
          data-seat-number="${seatNumber}"
        ></div>`,
    )
    .join('');

const getSectorLines = () => {
  const seatsStirng = getLineSets();

  return generateNumbersRange(1, 10)
    .map(
      lineNumber => `
        <div
          class="sector__line"
          data-line-number="${lineNumber}"
        >${seatsStirng}</div>`,
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const linesString = getSectorLines();

  const sectorsString = generateNumbersRange(1, 3)
    .map(
      sectorNumber => `
        <div
          class="sector"
          data-sector-number="${sectorNumber}"
        >${linesString}</div>`,
    )
    .join('');

  arenaElem.innerHTML = sectorsString;
};

// eslint-disable-next-line consistent-return
const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return undefined;
  }

  const sectorNumberElem = event.target.closest('.sector').dataset.sectorNumber;
  const seatNumberElem = event.target.dataset.seatNumber;
  const lineNumberElem = event.target.closest('.sector__line').dataset.lineNumber;

  const selectedSeatElem = document.querySelector('.board__selected-seat');

  selectedSeatElem.textContent = ` S ${sectorNumberElem} - L ${lineNumberElem} - S ${seatNumberElem} `;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
