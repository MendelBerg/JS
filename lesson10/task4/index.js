const getMaxAbsoluteNumber = numbers =>
  !(Array.isArray(numbers) && numbers.length)
    ? null
    : Math.max(...numbers.map(num => Math.abs(num)));
