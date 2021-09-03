/**
 * @title 剑指 Offer 22. 链表中倒数第k个节点
 * @reference https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/** 快慢指针 */
function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  if (!head) {
    return null;
  }

  let p = head;
  let q = head;

  /** 若链表长 n，则求 n - k + 1 个节点，快指针先走 k - 1 步，然后同步走 */
  for (let i = 1; i < k; i++) {
    q = q.next;
  }

  while (q.next) {
    p = p.next;
    q = q.next;
  }

  return p;
}

export { getKthFromEnd };
