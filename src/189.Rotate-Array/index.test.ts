import { rotate, rotatePointLoop, rotateReverse } from './';

describe('Native Array Function', () => {
  it('test 1', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    rotate(arr, 3);
    expect(arr).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('test 2', () => {
    const arr = [-1, -100, 3, 99];
    rotate(arr, 2);
    expect(arr).toEqual([3, 99, -1, -100]);
  });

  it('test 3', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    rotate(arr, 3);
    expect(arr).toEqual([4, 5, 6, 1, 2, 3]);
  });

  it('test 4', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    rotate(arr, 4);
    expect(arr).toEqual([3, 4, 5, 6, 1, 2]);
  });
});

describe('Point Loop', () => {
  it('test 1', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    rotatePointLoop(arr, 3);
    expect(arr).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('test 2', () => {
    const arr = [-1, -100, 3, 99];
    rotatePointLoop(arr, 2);
    expect(arr).toEqual([3, 99, -1, -100]);
  });

  it('test 3', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    rotatePointLoop(arr, 3);
    expect(arr).toEqual([4, 5, 6, 1, 2, 3]);
  });

  it('test 4', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    rotatePointLoop(arr, 4);
    expect(arr).toEqual([3, 4, 5, 6, 1, 2]);
  });
});

describe('Reverse', () => {
  it('test 1', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    rotateReverse(arr, 3);
    expect(arr).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('test 2', () => {
    const arr = [-1, -100, 3, 99];
    rotateReverse(arr, 2);
    expect(arr).toEqual([3, 99, -1, -100]);
  });

  it('test 3', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    rotateReverse(arr, 3);
    expect(arr).toEqual([4, 5, 6, 1, 2, 3]);
  });

  it('test 4', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    rotateReverse(arr, 4);
    expect(arr).toEqual([3, 4, 5, 6, 1, 2]);
  });
});
