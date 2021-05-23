const countOccurrences = function (str = '', text) {
  if (!text) return null;
  let myStr = str;
  let index = myStr.indexOf(text);
  let count = 0;

  while (index !== -1) {
    count += 1;
    myStr = myStr.slice(index + text.length + 1);
    index = myStr.indexOf(text);
  }

  return count;
};
