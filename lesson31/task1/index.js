const requestUserData = userId => {
  const p = new Promise((resolve, reject) => {
    if (userId === 'broken') {
      setTimeout(() => reject(new Error('User not found')), 500);
    } else {
      setTimeout(
        () =>
          resolve({
            name: 'John',
            age: 17,
            userId,
            email: `${userId}@example.com`,
          }),
        1000,
      );
    }
  });

  return p;
};

const res = requestUserData('broen')
  .then(data => console.log(data))
  .catch(error => console.log(error));

const res2 = requestUserData('broken')
  .then(data => console.log(data))
  .catch(error => console.log(error));

console.log(res);
console.log(res2);
