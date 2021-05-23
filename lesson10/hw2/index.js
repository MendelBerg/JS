const getRandomNumbers = (length, from, to) => {
  const start = Math.ceil(from);
  const end = Math.floor(to);

  if (end - start < 1) return null;

  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(Math.floor(Math.random() * (end - start + 1)) + start);
  }

  return arr;
};

// examples
getRandomNumbers(5, 1.4, 3.22); // ==> [2, 2, 2, 3, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
