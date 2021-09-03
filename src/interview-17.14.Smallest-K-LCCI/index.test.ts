import { smallestK, smallestKSort } from './';

describe('Sort', () => {
  it('test 1', () => {
    expect(smallestKSort([1, 3, 5, 7, 2, 4, 6, 8], 4).sort()).toEqual([1, 2, 3, 4]);
  });
});

describe('Queue', () => {
  it('test 1', () => {
    expect(smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4).sort()).toEqual([1, 2, 3, 4]);
  });
});
