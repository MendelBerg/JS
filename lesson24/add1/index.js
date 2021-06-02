/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const studentsBirthDays = students => {
  const obj = {};
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  students.forEach(elObj => {
    const month = months[elObj.birthDate.split('/')[0] - 1];
    obj[month] = obj[month] || [];
    obj[month].push(elObj);
  });

  for (const key in obj) {
    obj[key].sort((a, b) => a.birthDate.split('/')[1] - b.birthDate.split('/')[1]);
  }

  for (const key in obj) {
    obj[key] = obj[key].map(student => student.name);
  }

  return obj;
};

const arr = [
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Bob', birthDate: '03/08/2010' },
  { name: 'Tim', birthDate: '01/02/2010' },
  { name: 'John', birthDate: '03/31/2010' },
];

console.log(studentsBirthDays(arr));
