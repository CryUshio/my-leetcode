import { maxSubArray, maxSubArrayDP } from '.';

describe('maxSubArray', () => {
  it('test 1', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArray([1])).toBe(1);
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
    expect(maxSubArray([-1])).toBe(-1);
  });

  it('test 2', () => {
    expect(maxSubArrayDP([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArrayDP([1])).toBe(1);
    expect(maxSubArrayDP([5, 4, -1, 7, 8])).toBe(23);
    expect(maxSubArrayDP([-1])).toBe(-1);
  });
});
