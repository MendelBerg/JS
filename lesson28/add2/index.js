const sum = num => num === 1 ? num : num + sum(num - 1);

console.log(sum(5));