/* eslint-disable no-nested-ternary */
const cleanTransactionsList = data =>
  data
    .filter(item => Number.isFinite(+item))
    .map(item => `$${!Number.isFinite(item) ? item.trim() : item}`)
    .map(item =>
      !item.includes('.')
        ? `${item}.00`
        : item.slice(item.indexOf('.') + 1).length === 1
        ? `${item}0`
        : item
    );

console.log(cleanTransactionsList(['  1.90 ', '16.4', 17, ' 1 dollar ']));
