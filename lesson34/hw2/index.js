/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */

// import { createUser } from './server.js';
// import { clearInputs } from './functions.js';

const errorMessageElem = document.querySelector('.error-text');
const allInputs = [...document.querySelectorAll('.form-input')];
const submitBtn = document.querySelector('.submit-button');
const form = document.querySelector('.login-form');

const baseUrl = 'https://60b39c004ecdc1001747f926.mockapi.io/api/t1/user';
let enabledBtn = true;

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}

function clearInputs(arrInputs) {
  arrInputs.forEach(inputElem => {
    inputElem.value = '';
  });
}

submitBtn.addEventListener('click', event => {
  event.preventDefault();

  if (!form.reportValidity()) {
    console.log('error');
    enabledBtn = false;
    submitBtn.setAttribute('disabled', true);
    errorMessageElem.textContent = 'Failed to create user';
    return;
  }

  createUser({
    email: allInputs[0].value,
    name: allInputs[1].value,
    password: allInputs[2].value,
  }).then(res => {
    alert(JSON.stringify(res));
    clearInputs(allInputs);
  });
});

form.addEventListener('click', _ => {
  if (
    allInputs[0].value !== '' &&
    allInputs[1].value !== '' &&
    allInputs[2].value !== '' &&
    enabledBtn
  ) {
    submitBtn.removeAttribute('disabled');
  }
});

allInputs.forEach(e => {
  e.onblur = () => {
    enabledBtn = true;
    errorMessageElem.textContent = '';
  };
});

// allInputs.forEach(inputEl => {
//   inputEl.addEventListener('blur', _ => {
//     if (submitBtn.hasAttribute('disabled')) {
//
//       errorMessageElem.textContent = '';
//     }
//   });
// });
