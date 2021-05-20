import { withdraw } from './withdraw';

it('should get -1 when there is no money', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);

  expect(result).toEqual(-1);
});

it('should get -1 when money is not enough', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1399, 87, -6], 'Ann', 1400);

  expect(result).toEqual(-1);
});

it('should withdraw money from the account and get the current account', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);

  expect(result).toEqual(37);
});