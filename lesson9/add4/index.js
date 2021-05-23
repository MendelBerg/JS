const getCustomersList = obj =>
  Object.entries(obj)
    .sort((a, b) => a[1].age - b[1].age)
    .map(el => ({ ...el[1], id: el[0] }));
