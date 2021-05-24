const cleanTransactionsList = data =>
  data
    .filter(item => Number.isFinite(+item))
    .map(item => (!Number.isFinite(item) ? +item.trim() : item))
    .map(item => `$${item.toFixed(2)}`);

console.log(cleanTransactionsList(['  1.9 ', '16.4', 17, ' 1 dollar ']));
