/**
 * @reference https://leetcode.cn/problems/maximum-subarray/
 */

/** 最大子数组和 */
function maxSubArray(nums: number[]): number {
  let maxSum = NaN;
  let tempSum = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    tempSum += element;

    if (isNaN(maxSum) || tempSum > maxSum) {
      maxSum = tempSum;
    }

    if (tempSum < 0) {
      tempSum = 0;
    }
  }

  return maxSum;
}

export { maxSubArray };
