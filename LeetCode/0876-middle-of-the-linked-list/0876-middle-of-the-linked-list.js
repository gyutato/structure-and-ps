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
var middleNode = function(node, index = 0) {
    // base case
    if (!node) {
        return index
    }

    const depth = middleNode(node.next, index + 1)
    if (index === Math.floor(depth / 2)) return node
    return depth
};