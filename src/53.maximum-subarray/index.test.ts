import { maxSubArray } from '.';

describe('containsDuplicate', () => {
  it('test 1', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArray([1])).toBe(1);
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
    expect(maxSubArray([-1])).toBe(-1);
  });

  // it('test 2', () => {
  //   expect(containsDuplicateSet([1, 2, 3, 1])).toBe(true);
  //   expect(containsDuplicateSet([1, 2, 3, 4])).toBe(false);
  //   expect(containsDuplicateSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  // });
});
