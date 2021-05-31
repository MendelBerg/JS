/* eslint-disable no-param-reassign */

// =======================SOURCE===============
const baseUrl = 'https://60b39c004ecdc1001747f926.mockapi.io/api/t1/user';

export const errorMessageElem = document.querySelector('.error-text');
export const allInputs = [...document.querySelectorAll('.form-input')];
export const submitBtn = document.querySelector('.submit-button');
export const form = document.querySelector('.login-form');

function clearInputs(arrInputs) {
  arrInputs.forEach(inputElem => {
    inputElem.value = '';
  });
}

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}

// =============VALIDATION===========

function checkValidation() {
  if (!form.reportValidity()) {
    submitBtn.setAttribute('disabled', true);
    errorMessageElem.textContent = 'Failed to create user';
    return;
  }

  submitBtn.removeAttribute('disabled');

  createUser({
    email: allInputs[0].value,
    name: allInputs[1].value,
    password: allInputs[2].value,
  }).then(res => {
    alert(JSON.stringify(res));
    clearInputs(allInputs);
  });
}

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  checkValidation();
});
