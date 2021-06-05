/* eslint-disable no-eval */
const shmoment = initialValue => {
  const result = new Date(initialValue);

  const convertType = type => {
    if (type === 'years') return 'FullYear';
    if (type === 'months') return 'Month';
    if (type === 'days') return 'Date';
    return type[0].toUpperCase() + type.slice(1);
  };

  const count = (type, num, operator) => {
    const currentTime = result[`get${type}`]();
    result[`set${type}`](eval(`${currentTime} ${operator} ${num}`));
  };

  const calculator = {
    add(typeOfTime, num) {
      count(convertType(typeOfTime), num, '+');
      return this;
    },
    subtract(typeOfTime, num) {
      count(convertType(typeOfTime), num, '-');
      return this;
    },
    result() {
      return result;
    },
  };

  return calculator;
};

console.log(new Date(2020, 0, 7, 17, 17, 17));
const dd = new Date(2020, 0, 7, 17, 17, 17);
const res = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .add('seconds', 2)
  .add('hours', 10)
  .add('years', 10)
  .result(); 
console.log(res);
console.log(dd);
