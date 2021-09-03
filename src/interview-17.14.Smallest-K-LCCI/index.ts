/**
 * @title 面试题 17.14. 最小K个数
 * @reference https://leetcode-cn.com/problems/smallest-k-lcci/
 */

/** 排序法 */
function smallestKSort(arr: number[], k: number): number[] {
  return arr.sort((x, y) => x - y).slice(0, k);
}

/** 队列法 */
function smallestK(arr: number[], k: number): number[] {
  const maxK = Math.min(arr.length, k);
  const queue = arr.splice(0, maxK).sort((x, y) => x - y);

  for (const value of arr) {
    insert(value);
  }

  function insert(n: number) {
    // debugger;

    if (n <= queue[0]) {
      queue.unshift(n);
      queue.pop();
      return;
    }

    if (n > queue[maxK - 1]) {
      return;
    }

    for (let i = maxK - 1; i >= 0; i--) {
      if (n >= queue[i]) {
        queue.splice(i + 1, 0, n);
        queue.pop();
        return;
      }
    }
  }

  return queue;
}

/** 快排法
 * 随便找个数，进行一轮快排
 * 快排结束，进行数据划分,假设这个数属于第 pos 个
 * - t = k，那么返回前 pos 个；
 * - t > k，那么问题规模缩小为在前面 pos - 1 个数找 k 个；
 * - t < k，说明已经确定前 pos 个数属于前 k 个，但是第 pos + 1 到 k 这些数还没确定，那么问题规模缩小为从 pos + 1 到右边界找 k - pos 个数
 */
// function smallestKQuickSort(arr: number[], k: number): number[] {

// }

export { smallestK, smallestKSort };
