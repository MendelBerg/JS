import getMinSquaredNumber from './getMinSquaredNumber';

it('should get null when array is empty', () => {
  expect(null).toEqual(getMinSquaredNumber([]));
});

it('should get null when argument is not an array', () => {
  expect(null).toEqual(getMinSquaredNumber('Hello!'));
});


it('should get sum of two numbers', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);

  expect(result).toEqual(4);
});
