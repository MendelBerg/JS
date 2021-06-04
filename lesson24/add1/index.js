const studentsBirthDays = students => {
  const birthObj = {};

  students.forEach(elObj => {
    const month = new Date(elObj.birthDate).toLocaleString('en', { month: 'short' });
    birthObj[month] = birthObj[month] || [];
    birthObj[month].push(elObj);
  });

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
