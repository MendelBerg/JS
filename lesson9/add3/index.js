function compareObjects(obj1, obj2) {
  const arr1 = Object.entries(obj1);
  const arr2 = Object.entries(obj2);

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (!(arr1[i][0] === arr2[i][0] && arr1[i][1] === arr2[i][1])) {
      return false;
    }
  }

  return true;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

compareObjects(obj1, obj2); // ==> false
compareObjects(obj2, obj3); // ==> false
compareObjects(obj1, obj4); // ==> true
