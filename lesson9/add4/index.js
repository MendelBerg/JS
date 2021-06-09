const getCustomersList = obj =>
  Object.entries(obj)
    .map(([id, customerObj]) => ({ ...customerObj, id }))
    .sort((a, b) => a.age - b.age);
