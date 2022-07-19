import { containsDuplicate, containsDuplicateSet } from './';

describe('containsDuplicate', () => {
  it('test 1', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  it('test 2', () => {
    expect(containsDuplicateSet([1, 2, 3, 1])).toBe(true);
    expect(containsDuplicateSet([1, 2, 3, 4])).toBe(false);
    expect(containsDuplicateSet([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
});
