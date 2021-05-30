/* eslint-disable no-sparse-arrays */
const serverResponsePromise = new Promise(resolve => {
  const serverResponse = {
    ok: true,
    json() {
      return Promise.resolve([
        {
          name: 'John',
          age: 20,
        },
        {
          name: 'Tom',
          age: 21,
        },
        {
          name: 'Bob',
          age: 22,
        },
      ]);
    },
  };
  resolve(serverResponse);
});

/*
 * допиши первый обработчик, чтобы во второй попал объект пользователя
 */

serverResponsePromise
  .then(response => response.json())
  .then(result => [...result].find(e => e.name === 'Bob'))
  .then(res => console.log(res));

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!',
);
