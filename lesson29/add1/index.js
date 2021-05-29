/* eslint-disable no-shadow */
const delay = (delay, callback, context, ...args) => {
  setTimeout(() => {
    callback.apply(context, args);
  }, delay);
};


const obj = {
  name: 'Tom',
  sayHi(a, b) {
    console.log(`${a} ${this.name}! ${b}?`);
  }
};

delay(2000, obj.sayHi, obj, 'Hello', 'How are you');