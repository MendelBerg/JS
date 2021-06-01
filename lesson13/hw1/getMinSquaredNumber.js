export default numbers =>
  !(Array.isArray(numbers) && numbers.length)
    ? null
    : Math.min(...numbers.map(num => num ** 2));
