const arrAverage = arr =>
  Array.isArray(arr) ? arr.reduce((acc, num) => acc + num) / arr.length : null;
