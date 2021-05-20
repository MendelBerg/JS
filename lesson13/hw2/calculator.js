/* eslint-disable no-nested-ternary */
export const calc = expression => {
  if (typeof expression !== 'string') return null;
  const [a, operator, b] = expression
    .split(' ').map(char => (isFinite(char) ? +char : char));

  return `${expression} = ${
    operator === '+'
    ? a + b
    : operator === '-'
    ? a - b
    : operator === '*'
    ? a * b
    : a / b
  }`;
};
