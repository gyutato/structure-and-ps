/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const swap = (node) => {
    const tmp = node.left
    node.left = node.right
    node.right = tmp
    return node
 }
 
var invertTree = function(root) {
    if (!root) return root

    if (root.left) invertTree(root.left)
    if (root.right) invertTree(root.right)
    return swap(root)
};