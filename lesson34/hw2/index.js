/* eslint-disable no-use-before-define */
const baseUrl = 'https://60b39c004ecdc1001747f926.mockapi.io/api/t1/user';

const errorMessageElem = document.querySelector('.error-text');
const allInputs = [...document.querySelectorAll('.form-input')];
const submitBtn = document.querySelector('.submit-button');

isValid(allInputs);

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
  arrInputs.forEach(e => {
    e.value = '';
  });
}

submitBtn.addEventListener('click', event => {
  event.preventDefault();

  createUser({
    email: allInputs[0].value,
    name: allInputs[1].value,
    password: allInputs[2].value,
  }).then(res => {
    console.log(res);
    alert(res);
    clearInputs(allInputs);
    isValid(allInputs);
  });
});

function isValid(arr) {
  if (arr[0].reportValidity() && arr[1].reportValidity() && arr[2].reportValidity()) {
    submitBtn.removeAttribute('disabled');
    errorMessageElem.textContent = '';
  } else if (!submitBtn.hasAttribute('disabled')) {
    submitBtn.setAttribute('disabled', true);
    errorMessageElem.textContent = 'Failed to create user';
  } else {
    errorMessageElem.textContent = 'Failed to create user';
  }
}

allInputs.forEach(e => {
  console.log(e);
  e.onblur = () => isValid(allInputs);
  e.onfocus = () => {
    errorMessageElem.textContent = '';
  };
});
