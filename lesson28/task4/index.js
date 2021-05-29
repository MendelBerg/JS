const compose =
  (...funcs) =>
  value =>
    funcs.reduce((acc, func) => func(acc), value);

const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;

const superFunc = compose(add2, square, half);
const res = superFunc(2); // 8
console.log(res);
