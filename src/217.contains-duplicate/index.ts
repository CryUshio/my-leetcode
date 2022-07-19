/**
 * @reference https://leetcode.cn/problems/contains-duplicate/
 */

/** 存在重复元素 */
function containsDuplicate(nums: number[]): boolean {
  const buffer: Array<boolean | undefined> = [];

  for (let index = 0; index < nums.length; index++) {
    if (buffer[nums[index]]) {
      return true;
    }

    buffer[nums[index]] = true;
  }

  return false;
}

function containsDuplicateSet(nums: number[]): boolean {
  const buffer = new Set<number>();

  for (let index = 0; index < nums.length; index++) {
    if (buffer.has(nums[index])) {
      return true;
    }

    buffer.add(nums[index]);
  }

  return false;
}

export { containsDuplicate, containsDuplicateSet };
