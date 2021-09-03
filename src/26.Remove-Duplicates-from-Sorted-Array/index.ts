/**
 * @reference https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 */

function removeDuplicates(nums: number[]): number {
  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[pos] !== nums[i]) {
      nums[++pos] = nums[i];
    }
  }
  return pos + 1;
}

export { removeDuplicates };
