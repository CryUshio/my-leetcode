/**
 * @title 189. 旋转数组
 * @reference https://leetcode-cn.com/problems/rotate-array/
 */

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const t = k % nums.length;
  const copy = nums.slice();

  for (let i = 0; i < nums.length; i++) {
    nums[(i + t) % nums.length] = copy[i];
  }
}

/** 指针循环法 */
function rotatePointLoop(nums: number[], k: number): void {
  const len = nums.length;
  /** 去掉无效旋转次数，旋转一周为无效旋转 */
  const times = k % len;
  let p = 0;
  let numP = nums[p];

  /**
   * [1, 2, 3, 4, ...]
   * 考虑 k = 2 时，2、4、... 会在第一次循环被跳过，所以要循环 k 次以遍历到所有的元素
   */
  for (let i = 0; i < times; i++) {
    /**
     * 避免循环
     * 想象将数组重复多次，[1, 2, 3, 4, 5, 6], k = 4, [(1), 2, 3, 4, (5), 6, 1, 2, (3), 4, 5, 6, (1), 2, 3, 4, (5), 6]
     * 当 p 跳 3 次后，指向了第三个数组的同一位，导致循环
     * 观察发现，重复和数组长度有关，p 如果不重置，则当 p' % len = 0 时，出现循环
     * p' = len * i = k * x (x是正整数) 时，有 (len * i) / k = x，所以 (len * i) % k = 0
     **/
    if (i > 0 && (len * i) % k === 0) {
      p++;
      numP = nums[p];
    }

    /**
     * 将本轮遍历的元素全部旋转
     */
    while (p < len) {
      /** 下个数的位置 */
      const next = (p + times) % len;
      /** 保存下个数 */
      const temp = nums[next];
      /** 将缓存数赋值给下个位置 */
      nums[next] = numP;
      /** 将下个数缓存 */
      numP = temp;
      /** 移动指针位置 */
      p += times;
    }

    p %= len;
  }
}

/** 数组翻转 */
function rotateReverse(nums: number[], k: number): void {
  const t = k % nums.length;

  /** 把后面的整体挪到前面 */
  nums.unshift(...nums.splice(-t));
}

export { rotate, rotatePointLoop, rotateReverse };
