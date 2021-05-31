/* eslint-disable import/named */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */

import {
  clearInputs,
  createUser,
  errorMessageElem,
  allInputs,
  submitBtn,
  form,
} from './functions.js';

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
