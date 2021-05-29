const maxFibonacci = maxNum => {
  if (maxNum <= 0) {
    return null;
  }

  const fib = n => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

  for (let i = 0; ; i += 1) {
    if (fib(i) > maxNum) return fib(i - 1);
  }
};

console.log(maxFibonacci(15));
console.log(maxFibonacci(8));
