const countOccurrences = function (str = '', text) {
  if (!text) return null;

  let count = 0;
  let index = str.indexOf(text);

  while (index !== -1) {
    count += 1;
    index = str.indexOf(text, index + 1);
  }

  return count;
};

console.log(countOccurrences('ssMannaMannaManManna', 'Manna'));
