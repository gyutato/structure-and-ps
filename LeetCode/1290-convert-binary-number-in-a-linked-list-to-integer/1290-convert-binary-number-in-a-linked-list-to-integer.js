/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(node) {
    let value = ""

    while (node) {
        value += node.val
        node = node.next
    }

    let i = 0;
    let result = 0;
    while (i < value.length) {
        result += (Math.pow(2, i) * value[value.length - 1 - i])
        i++;
    }

    return result
};