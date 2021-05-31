/* eslint-disable no-param-reassign */
const baseUrl = 'https://60b39c004ecdc1001747f926.mockapi.io/api/t1/user';

export const errorMessageElem = document.querySelector('.error-text');
export const allInputs = [...document.querySelectorAll('.form-input')];
export const submitBtn = document.querySelector('.submit-button');
export const form = document.querySelector('.login-form');

export function clearInputs(arrInputs) {
  arrInputs.forEach(inputElem => {
    inputElem.value = '';
  });
}


export function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}