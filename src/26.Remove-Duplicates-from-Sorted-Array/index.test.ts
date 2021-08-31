import { removeDuplicates } from './';

it('test 1', () => {
  const arr = [1, 1, 2];
  expect(removeDuplicates(arr)).toBe(2);
  expect(arr.toString().startsWith([1, 2].toString())).toBe(true);
});

it('test 2', () => {
  const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  expect(removeDuplicates(arr)).toBe(5);
  expect(arr.toString().startsWith([0, 1, 2, 3, 4].toString())).toBe(true);
});
