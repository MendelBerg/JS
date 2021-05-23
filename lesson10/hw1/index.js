const getTotalPrice = numbers =>
  `$${Math.floor(numbers.reduce((acc, curr) => acc + curr) * 100) / 100}`;
