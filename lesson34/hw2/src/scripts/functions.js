/* eslint-disable no-param-reassign */

export function clearInputs(arrInputs) {
  arrInputs.forEach(inputElem => {
    inputElem.value = '';
  });
}
