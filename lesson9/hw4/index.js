const getPeople = obj => {
  const people = [];

  Object.values(obj).forEach(e => {
    people.push(...e.map(person => person.name));
  });

  return people;
};
