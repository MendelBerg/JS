const calc = initialValue => {
  let res = initialValue;

  const calculator = {
    add(number) {
      res += number;
      return this;
    },
    subtract(number) {
      res -= number;
      return this;
    },
    mult(number) {
      res *= number;
      return this;
    },
    div(number) {
      res /= number;
      return this;
    },
    result() {
      return res;
    },
  };

  return calculator;
};

const res = calc(3).add(2).mult(4).div(10).subtract(5).result();;
console.log(res);
