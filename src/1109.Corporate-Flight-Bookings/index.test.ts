import { corpFlightBookingsViolent, corpFlightBookingsDifference } from './';

it('Violent test 1', () => {
  expect(corpFlightBookingsViolent([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5)).toEqual([10, 55, 45, 25, 25]);
});

it('Violent test 2', () => {
  expect(corpFlightBookingsViolent([[1, 2, 10], [2, 2, 15]], 2)).toEqual([10, 25]);
});

it('Difference test 1', () => {
  expect(corpFlightBookingsDifference([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5)).toEqual([10, 55, 45, 25, 25]);
});

it('Difference test 2', () => {
  expect(corpFlightBookingsDifference([[1, 2, 10], [2, 2, 15]], 2)).toEqual([10, 25]);
});
