/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 1. fast & slow
var hasCycle = function (head) {
  let turtle = head,
    hare = head;

  function traverse(turtle, hare) {
    // base case - false: 0 or 1 node
    if (!hare || !hare.next) return false;

    // set turtle and hare here, to prevent infinite loop
    // since at initial loop, turtle === hare (both set to head)
    turtle = turtle.next;
    hare = hare.next.next;

    // base case - true: hare === turtle
    if (hare === turtle) return true;

    return traverse(turtle, hare);
  }

  return traverse(turtle, hare);
};

// 2. brute force
var hasCycle = function (head) {
  const seen = new Set();

  function traverse(node) {
    if (seen.has(node)) return true;
    if (!node) return false;
    seen.add(node);
    return traverse(node.next);
  }

  return traverse(head);
};
