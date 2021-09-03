/**
 * @reference https://leetcode-cn.com/problems/sum-of-all-odd-length-subarrays/
 */

function sumOddLengthSubarrays(arr: number[]): number {
  /** 先找规律
   * 长度为 len 的数组可以生成 rankCount = Math.ceil(len / 2) 阶连续长度为奇数的子数组
   * 第 rank 阶数组有 m = len - (rank - 1) * 2 个, rank <= rankCount
   *   将 rank 阶数组看成矩阵，则最短边长为 minSide = Math.min(m, rank * 2 - 1)
   * 第 i 项
   *   距离数组左边距 left = i + 1, 右边距 right = len - 1
   *   在 rank 阶数组中共出现 count = Math.min(left, right) 次，如果 count > minSide，则出现 minSide 次
   */
  const len = arr.length;
  const rankCount = Math.ceil(len / 2);

  return arr.reduce((result, current, index) => {
    return result + current * count(index);
  }, 0);

  function count(i: number) {
    let result = 0;
    for (let rank = 1; rank <= rankCount; rank++) {
      const m = len - (rank - 1) * 2;
      const minSide = Math.min(m, rank * 2 - 1);
      result += countInRank(i, minSide);
    }
    return result;
  }

  function countInRank(i: number, minSide: number) {
    return Math.min(Math.min(i + 1, len - i), minSide);
  }
}

/**
[1]
1: 1 = 1

[1, 2]
1: 1 = 1
2: 1 = 1

[1, 2, 3]
1
2
3
123

1: 2 = 1 + 1
2: 2 = 1 + 1
3: 2 = 1 + 1

[1, 2, 3, 4]
1
2
3
4
123
234

1: 2 = 1 + 1
2: 3 = 1 + 2
3: 3 = 1 + 2
4: 2 = 1 + 1

[1, 2, 3, 4, 5]
1
2
3
4
5
123
234
345
12345

1: 3 = 1 + 1 + 1
2: 4 = 1 + 2 + 1
3: 5 = 1 + 3 + 1
4: 4 = 1 + 2 + 1
5: 3 = 1 + 1 + 1


[1, 2, 3, 4, 5, 6]
1
2
3
4
5
6
123
234
345
456
12345
23456

1: 3 = 1 + 1 + 1
2: 5 = 1 + 2 + 2
3: 6 = 1 + 3 + 2
4: 6 = 1 + 3 + 2
5: 5 = 1 + 2 + 2
6: 3 = 1 + 1 + 1

*/
