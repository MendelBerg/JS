const cleanTransactionsList = data =>
  data.filter(item => !isNaN(item)).map(item => `$${Number(item).toFixed(2)}`);

console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, ' 1 dollar ']));
