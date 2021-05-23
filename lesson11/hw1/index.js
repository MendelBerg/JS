const splitString = function (str, num = 10) {
  if (typeof str !== 'string') return null;
  let index = 0;
  const arr = [];

  while (true) {
    const chunk = str.substr(index, num);
    if (!chunk.length) break;
    arr.push(chunk.length === num ? chunk : chunk + '.'.repeat(num - chunk.length));
    index += num;
  }
  return arr;
};
