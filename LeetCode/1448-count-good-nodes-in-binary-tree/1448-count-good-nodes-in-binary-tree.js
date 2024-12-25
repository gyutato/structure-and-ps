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

// dfs 로, depth 늘어날 때마다 이전 depth 까지의 최대값과 비교
var goodNodes = function(root) {
    let cnt = 0;

    // dfs
    const dfs = (root, max = -Infinity) => {
        // base case
        if (!root) return;

        // 현재 depth 에서의 최댓값
        let localMax = max

        // 만약 현재 node 가 가장 큰 value 라면, cnt 와 max 업데이트
        if (root.val >= max) {
            cnt++;
            localMax = root.val
        }

        // 왼쪽 path 탐색
        dfs(root.left, localMax)
        // 오른쪽 path 탐색
        dfs(root.right, localMax)
    }

    dfs(root);

    return cnt
};