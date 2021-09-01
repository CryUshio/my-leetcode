/**
 * 暴力法
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let len = nums.length;
  let count = 0;
  for (let i=0; i < len; i++) {
      let sum = 0;
      for (let j=i; j < len;j++) {
          sum += nums[j];
          if (sum === k) {
              count++;
          }
      }
  }
  return count;
};
