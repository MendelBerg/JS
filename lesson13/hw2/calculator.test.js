import { calc } from './calculator';

it('should get sum of two numbers', () => {
  const result = calc('2 + 2');

  expect(result).toEqual('2 + 2 = 4');
});

it('should get difference of two numbers', () => {
  const result = calc('2 - 2');

  expect(result).toEqual('2 - 2 = 0');
});

it('should get product of two numbers', () => {
  const result = calc('2 * 2');

  expect(result).toEqual('2 * 2 = 4');
});

it("should get the division's result of two numbers", () => {
  const result = calc('2 / 2');

  expect(result).toEqual('2 / 2 = 1');
});

it('should get null when argument is not a string', () => {
  expect(calc(4)).toEqual(null);
});
