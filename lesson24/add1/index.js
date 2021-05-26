/* eslint-disable radix */
const studentBirthDays = students => {
  const months = [
    { Jan: [] },
    { Feb: [] },
    { Mar: [] },
    { Apr: [] },
    { May: [] },
    { Jun: [] },
    { Jul: [] },
    { Aug: [] },
    { Sep: [] },
    { Oct: [] },
    { Nov: [] },
    { Dec: [] },
  ];

  const objNames = {};

  students.forEach(el => {
    const index = parseInt(el.birthDate) - 1;
    const key = Object.keys(months[index]);
    months[index][key].push(el);
  });

  months.forEach(month => {
    const key = Object.keys(month);
    if (month[key].length) {
      month[key].sort((a, b) => a.birthDate.split('/')[1] - b.birthDate.split('/')[1]);
      objNames[key] = month[key].map(obj => obj.name);
    }
  });

  return objNames;
};

const arr = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
  { name: 'Bob', birthDate: '03/08/2010' },
  { name: 'John', birthDate: '03/31/2010' },
  { name: 'Tim', birthDate: '01/02/2010' },
];

console.log(studentBirthDays(arr));

      // month[key].forEach(ell => console.log(ell.birthDate.split('/')[1]));

