/**
 * @reference https://leetcode-cn.com/problems/running-sum-of-1d-array/
 */

function runningSum(nums: number[]): number[] {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }
  return nums;
}

runningSum([1, 2, 3, 4, 5]);
