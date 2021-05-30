/* eslint-disable import/no-mutable-exports */
export const baseUrl = 'https://60b39c004ecdc1001747f926.mockapi.io/api/t1/task';

export function getItem() {
  return fetch(baseUrl).then(response => response.json());
}

// export const setItem = (key, value) => {
//   localStorage.setItem(key, JSON.stringify(value));
// };

export function setItem(userData) {
  console.log(userData);
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}


// const get = key => JSON.parse(localStorage.getItem(key));

// export const getItem = key => get(key) || [];
