/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 반복문
var reverseList = function (head) {
  let curr = head,
    prev = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

// 재귀
var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }

  let newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
