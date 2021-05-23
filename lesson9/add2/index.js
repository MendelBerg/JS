/* eslint-disable array-callback-return */
function buildObject(keysList, valuesList) {
  const obj = {};
  keysList.reduce((_, key, index) => {
    obj[key] = valuesList[index];
  }, 0);

  return obj;
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
