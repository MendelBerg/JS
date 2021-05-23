const getAdults = obj =>
  Object.entries(obj)
    .filter(user => user[1] >= 18)
    .map(names => names[0]);
