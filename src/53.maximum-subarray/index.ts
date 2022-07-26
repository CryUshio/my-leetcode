/**
 * @reference https://leetcode.cn/problems/maximum-subarray/
 *
 * 需要注意最大和为负数的情况
 */

/** 最大子数组和 贪心算法 */
function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let tempSum = maxSum;

  for (let index = 1; index < nums.length; index++) {
    const element = nums[index];
    tempSum += element;

    if (tempSum > maxSum) {
      maxSum = tempSum;
    }

    if (tempSum < 0) {
      tempSum = 0;
    }
  }

  return maxSum;
}

/** 最大子数组和 动态规划 */
function maxSubArrayDP(nums: number[]): number {
  let tempSum = 0;
  let maxSum = -Infinity;

  nums.forEach((num) => {
    tempSum = Math.max(num, num + tempSum);
    maxSum = Math.max(maxSum, tempSum);
  });

  return maxSum;
}

export { maxSubArray, maxSubArrayDP };
