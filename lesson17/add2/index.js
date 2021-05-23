export function bind(func, context, ...argsBound) {
  return function (...args) {
    return func.call(context, ...argsBound, ...args);
  };
}

const user = {
  message: 'Hello',
};

function sayName(fname, lname) {
  return `${this.message} ${fname} ${lname}`;
}

const sth = bind(sayName, user, 'Bob');

console.log(sth('Marley'));
