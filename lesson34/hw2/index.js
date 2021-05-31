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

const onInputChange = () => {
  const isValidForm = form.reportValidity();
  if (isValidForm) {
    submitBtn.removeAttribute('disabled');
    errorMessageElem.textContent = '';
  } else {
    submitBtn.setAttribute('disabled', true);
    errorMessageElem.textContent = 'Failed to create user';
  }
};

allInputs.forEach(el => {
  el.addEventListener('click', onInputChange);
});

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  createUser({
    email: allInputs[0].value,
    name: allInputs[1].value,
    password: allInputs[2].value,
  }).then(res => {
    alert(JSON.stringify(res));
    clearInputs(allInputs);
  });
});
