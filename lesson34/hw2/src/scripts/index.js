/* eslint-disable no-use-before-define */

import { createUser } from './server.js';
import { clearInputs } from './functions.js';

const errorMessageElem = document.querySelector('.error-text');
const allInputs = [...document.querySelectorAll('.form-input')];
const submitBtn = document.querySelector('.submit-button');
const form = document.querySelector('.login-form');

submitBtn.addEventListener('click', event => {
  event.preventDefault();

  if (!form.reportValidity()) {
    console.log('errors!');
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

allInputs.forEach(inputEl => {
  inputEl.addEventListener('blur', _ => {
    if (submitBtn.hasAttribute('disabled')) {
      submitBtn.removeAttribute('disabled');
      errorMessageElem.textContent = '';
    }
  });
});
