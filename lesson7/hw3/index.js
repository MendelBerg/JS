const increaseEvenEl = (arr, delta) =>
  Array.isArray(arr) ? arr.map(num => (num % 2 === 0 ? num + delta : num)) : null;
