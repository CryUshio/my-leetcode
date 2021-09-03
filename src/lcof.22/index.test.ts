import { getKthFromEnd, ListNode } from './';

function createLinkedList(values: number[]): ListNode | null {
  if (values.length === 0) {
    return null;
  }

  const head = new ListNode(values.shift());

  values.reduce((prev, curr) => {
    const current = new ListNode(curr);
    prev.next = current;
    return current;
  }, head);

  return head;
}

it('test 1', () => {
  const linkedList = createLinkedList([1, 2, 3, 4, 5]);
  expect(getKthFromEnd(linkedList, 2).val).toBe(4);
});
