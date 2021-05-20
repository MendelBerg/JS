export const getSquaredArray = 
  numbers => numbers.map(num => num ** 2);

export const getOddNumbers = 
  numbers => numbers.filter(num => num % 2 !== 0);

export default (a, b) => a + b;
