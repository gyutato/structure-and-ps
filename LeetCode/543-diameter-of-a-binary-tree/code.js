/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0
    
    const dfs = (root) => {
        if (!root) return 0;

        const ldepth = dfs(root.left);
        const rdepth = dfs(root.right)

        diameter = Math.max(diameter, ldepth + rdepth)
        return Math.max(ldepth, rdepth) + 1
    }
    
    dfs(root)
    return diameter
};