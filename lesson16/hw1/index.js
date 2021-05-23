export const createArrayOfFunctions = (num = 0) => {
  if (!Number.isInteger(num)) return null;

  const arrNum = [];
  for (let i = 0; i < num; i += 1) {
    arrNum[i] = () => i;
  }

  return arrNum;
};

const arr = createArrayOfFunctions(7);

console.log(arr);
