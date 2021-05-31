const baseUrl = 'https://60b39c004ecdc1001747f926.mockapi.io/api/t1/user';

export function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}