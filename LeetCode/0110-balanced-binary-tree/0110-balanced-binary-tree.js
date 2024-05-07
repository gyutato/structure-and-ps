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
 * @return {boolean}
 */
var isBalanced = function(root) {
    
    let res = true
    const dfs = (node) => {
        if (!node) return 0

        const depthL = dfs(node.left)
        const depthR = dfs(node.right)

        if (Math.abs(depthL - depthR) > 1) res = false

        return Math.max(depthL, depthR) + 1
    }

    dfs(root)
    return res
};