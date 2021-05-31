const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) return null;

  return arr.map(num => (num % 2 === 0 ? num + delta : num));
};
