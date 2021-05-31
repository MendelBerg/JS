/* eslint-disable no-param-reassign */

// =======================SOURCE===============
const baseUrl = 'https://60b39c004ecdc1001747f926.mockapi.io/api/t1/user';

const errorMessageElem = document.querySelector('.error-text');
const allInputs = [...document.querySelectorAll('.form-input')];
const submitBtn = document.querySelector('.submit-button');
const form = document.querySelector('.login-form');

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
let enabledBtn = true;

function checkValidation() {
  allInputs.forEach(el => {
    el.addEventListener('blur', inputEl => {
      enabledBtn = true;
      errorMessageElem.textContent = '';
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

  if (!form.reportValidity()) {
    submitBtn.setAttribute('disabled', true);
    errorMessageElem.textContent = 'Failed to create user';
    enabledBtn = false;

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
