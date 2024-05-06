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
 * @return {number}
 */


var diameterOfBinaryTree = function(root) {
    let maxLen = 0;

    const dfs = (node) => {
        if (!node) {
            return 0
        }

        const depthL = dfs(node.left)
        const depthR = dfs(node.right)

        const len = depthL + depthR
        if (len > maxLen) {
            maxLen = len
        }

        return Math.max(depthL, depthR) + 1
    }
    dfs(root)

    return maxLen
};