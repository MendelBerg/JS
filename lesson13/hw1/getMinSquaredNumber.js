export default numbers =>
  Array.isArray(numbers) && numbers.length
    ? Math.min(...numbers.map(num => Math.abs(num ** 2)))
    : null;
