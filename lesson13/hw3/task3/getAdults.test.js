import { getAdults } from './getAdults';

it('should get an empty object when all people age under 18', () => {
  const result = getAdults({ 'John Doe': 13, Tom: 17, Bob: 8 });

  expect(result).toEqual({});
});

it('should get an object with one person', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it('should get an object with two people', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});