const mult = a => b => a * b;
const twice = value => mult(value)(2);
const triple = value => mult(value)(3);

console.log(mult(5)(4));
console.log(twice(7));
console.log(triple(9));