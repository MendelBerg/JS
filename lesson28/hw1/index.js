const shmoment = initialValue => {
  const result = new Date(initialValue);

  const dateMethods = {
    years: {
      timeSet(context, num) {
        return context.setFullYear(num);
      },
      timeGet(context) {
        return context.getFullYear();
      },
    },
    months: {
      timeSet(context, num) {
        return context.setMonth(num);
      },
      timeGet(context) {
        return context.getMonth();
      },
    },
    days: {
      timeSet(context, num) {
        return context.setDate(num);
      },
      timeGet(context) {
        return context.getDate();
      },
    },
    hours: {
      timeSet(context, num) {
        return context.setHours(num);
      },
      timeGet(context) {
        return context.getHours();
      },
    },
    minutes: {
      timeSet(context, num) {
        return context.setMinutes(num);
      },
      timeGet(context) {
        return context.getMinutes();
      },
    },
    seconds: {
      timeSet(context, num) {
        return context.setSeconds(num);
      },
      timeGet(context) {
        return context.getSeconds();
      },
    },
    milliseconds: {
      timeSet(context, num) {
        return context.setMilliseconds(num);
      },
      timeGet(context) {
        return context.getMilliseconds();
      },
    },
  };

  const calculator = {
    add(typeOfTime, num) {
      const date = dateMethods[typeOfTime];
      date.timeSet(result, date.timeGet(result) + num);
      return this;
    },
    subtract(typeOfTime, num) {
      const date = dateMethods[typeOfTime];
      date.timeSet(result, date.timeGet(result) - num);
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
const res = shmoment(dd).add('minutes', 2).add('days', 8).add('years', 1).result(); // ... Jan 15 2019 17:19:17 ...;
console.log(res);
console.log(dd);
