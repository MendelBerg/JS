const calc = expression => {
  const [a, operator, b] = expression.split(' ').map(char => +char || char);
  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      result = a / b;
  }

  return `${expression} = ${result}`;
};
