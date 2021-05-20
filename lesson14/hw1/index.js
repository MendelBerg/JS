let memo = 0;

export const add = function (num) {
  memo += num;
};

export const decrease = function (num) {
  memo -= num;
};

export const reset = function () {
  memo = 0;
};

export const getMemo = function () {
  return memo;
};