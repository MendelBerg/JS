/* eslint-disable no-param-reassign */
const studentsBirthDays = students => {
  const birthObj = students.reduce((newObj, student) => {
    const month = new Date(student.birthDate).toLocaleString('en', { month: 'short' });
    newObj[month] = newObj[month] || [];
    newObj[month].push(student);
    return newObj;
  }, {});

  return Object.entries(birthObj).reduce(
    (acc, month) => ({
      ...acc,
      [month[0]]: month[1]
        .sort((a, b) => a.birthDate.split('/')[1] - b.birthDate.split('/')[1])
        .map(({ name }) => name),
    }),
    {},
  );
};

const arr = [
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Bob', birthDate: '03/08/2010' },
  { name: 'Tim', birthDate: '01/01/2010' },
  { name: 'John', birthDate: '03/31/2010' },
];

console.log(studentsBirthDays(arr));
