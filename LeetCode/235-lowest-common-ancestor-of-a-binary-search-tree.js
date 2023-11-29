// 2트 - BST의 특성 활용하기

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    } 

    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    }

    return root
};


// 1트 - BST인 거 모르고 푼 풀이
var lowestCommonAncestor = function(root, p, q) {
    let ans = 0
    const routeP = dfs(p.val, root, [])
    const routeQ = dfs(q.val, root, [])
    const routes = {
        shorter: routeP.length <= routeQ.length ? routeP : routeQ,
        longer: routeP.length > routeQ.length ? routeP : routeQ
    }

    console.log(routes)

    for (let i = routes.shorter.length - 1; i >= 0; i--) {
        const shorterVal = routes.shorter[i].val
        const isLca = !!routes.longer.filter(node => node.val === shorterVal).length
        if (isLca) return routes.shorter[i]
    }
};

const dfs = (val, node, stack) => {
    if (node && node.val === val) {
        return [...stack, node]
    } else if (!node) {
        return null
    }

    const routeLeft = dfs(val, node.left, [...stack, node])
    const routeRight = dfs(val, node.right, [...stack, node])
    return routeLeft ? routeLeft : routeRight
}