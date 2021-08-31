/**
 * @reference https://leetcode-cn.com/problems/corporate-flight-bookings/
 */

/** 暴力法 */
function corpFlightBookingsViolent(bookings: number[][], n: number): number[] {
  const answer = new Array(n).fill(0);

  bookings.forEach(([first, last, booking]) => {
    for (let i = first; i <= last; i++) {
      answer[i - 1] += booking;
    }
  });

  return answer;
};

/** 差分法 */
function corpFlightBookingsDifference (bookings: number[][], n: number): number[] {
  const answer = new Array(n).fill(0);

  for (const booking of bookings) {
    answer[booking[0] - 1] += booking[2];
    if (booking[1] < n) {
      answer[booking[1]] -= booking[2];
    }
  }
  for (let i = 1; i < n; i++) {
    answer[i] += answer[i - 1];
  }

  return answer;
};



export {
  corpFlightBookingsViolent,
  corpFlightBookingsDifference,
};
