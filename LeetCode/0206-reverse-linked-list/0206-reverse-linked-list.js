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
var reverseList = function (node) {
  let prev = null;
  let next = null;

  const traverse = (node) => {
    if (!node) return;

    next = node.next;
    node.next = prev;
    prev = node;

    traverse(next);
  };

  traverse(node)
  
  return prev
};