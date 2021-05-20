import { reverseArray } from './reverseArray';

it('should get null when argument is not an array', () => {
  const result = reverseArray('');

  expect(result).toEqual(null);
});

it('should get the same array when array has only one element', () => {
  const result = reverseArray([0]);

  expect(result).toEqual([0]);
});

it('should get a reversed array when the argument is an array with several elements', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);

  expect(result).toEqual([5, 4, 3, 2, 1]);
});
