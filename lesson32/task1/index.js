const getValue = value =>
  new Promise(resolve => {
    resolve(value);
  });

const num1 = getValue('df');
const num2 = getValue('');
const num3 = getValue('234');

const asyncSum = (...asyncNmbers) =>
  Promise.all(asyncNmbers).then(numbers =>
    numbers.filter(number => !isNaN(number)).reduce((acc, num) => acc + Number(num), 0),
  );

asyncSum(num1, num2, num3)
  .then(result => console.log(result))
  .catch(() => Promise.reject(new Error("Can't calculate\\")));
