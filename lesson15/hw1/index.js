export const createCalculator = () => {
  let memo = 0;
  return {
    add(num) {
      memo += num;
    },
    decrease(num) {
      memo -= num;
    },
    reset() {
      memo = 0;
    },
    getMemo() {
      return memo;
    },
  };
};

const c = createCalculator();
console.log(c.getMemo());
c.add(1);
console.log(c.getMemo());

console.log('b');

const b = createCalculator();
console.log(b.getMemo());
b.add(1);
console.log(b.getMemo());
console.log('c');

c.decrease(5);
console.log(c.getMemo());
console.log('b');

b.decrease(9);
console.log(b.getMemo());
console.log('c');

c.reset();
console.log(c.getMemo());
console.log('b');

b.reset();
console.log(b.getMemo());
