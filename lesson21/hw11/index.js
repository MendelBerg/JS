/* eslint-disable no-param-reassign */
function squaredNumbers() {
  const liElems = document.querySelectorAll('.number');

  liElems.forEach(liElem => {
    liElem.dataset.squaredNumber = liElem.dataset.number ** 2;
  });
}

squaredNumbers();