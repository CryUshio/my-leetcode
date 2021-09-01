import { compareVersion, compareVersionStringSplit } from './';

it('test 1', () => {
  expect(compareVersion('1.01', '1.001')).toBe(0);
});

it('test 2', () => {
  expect(compareVersion('1.0', '1.0.0')).toBe(0);
});

it('test 3', () => {
  expect(compareVersion('0.1', '1.1')).toBe(-1);
});

it('test 4', () => {
  expect(compareVersion('1.0.1', '1')).toBe(1);
});

it('test 5', () => {
  expect(compareVersion('7.5.2.4', '7.5.3')).toBe(-1);
});

it('test 6', () => {
  expect(compareVersion('1.9.9.9', '1.10.0.0')).toBe(-1);
});

it('Violent test 1', () => {
  expect(compareVersionStringSplit('1.01', '1.001')).toBe(0);
});

it('Violent test 2', () => {
  expect(compareVersionStringSplit('1.0', '1.0.0')).toBe(0);
});

it('Violent test 3', () => {
  expect(compareVersionStringSplit('0.1', '1.1')).toBe(-1);
});

it('Violent test 4', () => {
  expect(compareVersionStringSplit('1.0.1', '1')).toBe(1);
});

it('Violent test 5', () => {
  expect(compareVersionStringSplit('7.5.2.4', '7.5.3')).toBe(-1);
});

it('Violent test 6', () => {
  expect(compareVersionStringSplit('1.9.9.9', '1.10.0.0')).toBe(-1);
});
