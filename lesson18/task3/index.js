export function sumOfSquares(...numbers) {
  return [...numbers].reduce((a, b) => a + b ** 2, 0);
}
