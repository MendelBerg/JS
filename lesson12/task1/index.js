/* eslint-disable no-nested-ternary */
const calc = expression => {
  const [a, operator, b] = expression.split(' ').map(char => (isFinite(char) ? +char : char));

  return `${expression} = ${
    operator === '+' ? a + b : operator === '-' ? a - b : operator === '*' ? a * b : a / b
  }`;
};

//! OR
// const calc = expression => {
//   const [a, operator, b] = expression.split(' ').map(char => (isFinite(char) ? +char : char));
//   let result;

//   switch (operator) {
//     case '+':
//       result = a + b;
//       break;
//     case '-':
//       result = a - b;
//       break;
//     case '*':
//       result = a * b;
//       break;
//     default:
//       result = a / b;
//   }

//   return `${expression} = ${result}`;
// };
