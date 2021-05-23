/* eslint-disable prefer-rest-params */
function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

//* EXAMPLE:

const user = {
  name: 'Tom',
  sayHi() {
    console.log(`Hi, I'm ${this.name}!`);
  },
};

const deferredHi = defer(user.sayHi, 1000);

deferredHi.call({ name: 'Bob' });
