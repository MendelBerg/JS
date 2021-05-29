const shmoment = initialValue => {
  const result = new Date(initialValue);

  const dateMethods = {
    years: {
      set: new Date().setFullYear,
      get: new Date().getFullYear,
    },
    months: {
      set: new Date().setMonth,
      get: new Date().getMonth,
    },
    days: {
      set: new Date().setDate,
      get: new Date().getDate,
    },
    hours: {
      set: new Date().setHours,
      get: new Date().getHours,
    },
    minutes: {
      set: new Date().setMinutes,
      get: new Date().getMinutes,
    },
    seconds: {
      set: new Date().setSeconds,
      get: new Date().getSeconds,
    },
    milliseconds: {
      set: new Date().setMilliseconds,
      get: new Date().getMilliseconds,
    },
  };

  const calculator = {
    add(typeOfTime, num) {
      const date = dateMethods[typeOfTime];
      date.set.call(result, date.get.call(result) + num);
      return this;
    },
    subtract(typeOfTime, num) {
      const date = dateMethods[typeOfTime];
      date.set.call(result, date.get.call(result) - num);
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
const res = shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result(); // ... Jan 15 2019 17:19:17 ...
console.log(res);
console.log(dd);
