const getMaxAbsoluteNumber = numbers =>
  Array.isArray(numbers) && numbers.length ? Math.max(...numbers.map(num => Math.abs(num))) : null;
