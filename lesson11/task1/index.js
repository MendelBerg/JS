const splitText = function (str, num = 10) {
  if (typeof str !== 'string') return null;
  let index = 0;
  const arr = [];

  while (true) {
    const chunk = str.substr(index, num);
    if (!chunk.length) break;
    arr.push(chunk[0].toUpperCase() + chunk.slice(1));
    index += num;
  }
  return arr.join('\n');
};


//! OR
// const splitText = function (str, num = 10) {
//   if (typeof str !== 'string') return null;
//   let myString = str;
//   const arr = [];

//   while (myString) {
//     arr.push(myString[0].toUpperCase() + myString.slice(1, num));
//     myString = myString.slice(num);
//   }

//   return arr.join('\n');
// };