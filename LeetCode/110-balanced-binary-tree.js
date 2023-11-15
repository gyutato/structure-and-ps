/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true
    const ans = {flag: true}

    const dfs = (node) => {
        if (!node) {
            return 0
        }
        const ldepth = dfs(node.left) + 1
        const rdepth = dfs(node.right) + 1
        if (Math.abs(ldepth - rdepth) > 1) {
            ans.flag = false
        }
        return Math.max(ldepth, rdepth)
    }

    dfs(root)
    return ans.flag
};