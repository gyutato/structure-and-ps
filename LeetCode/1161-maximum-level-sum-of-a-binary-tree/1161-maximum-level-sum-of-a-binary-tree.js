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
var maxLevelSum = function (root) {
  if (!root) return null;

  // 최댓값에 대한 정보 변수 초기화
  let max = -Infinity;
  let maxLevel = 0;

  // bfs 를 위한 값 초기화
  let level = 0;
  const queue = [root];

  while (queue.length) {
    level++;
    let size = queue.length;
    let sum = 0;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      sum += node.val;
      addLeaves(node, queue);
    }

    if (max < sum) {
      max = sum;
      maxLevel = level;
    }
  }

  return maxLevel
};

const addLeaves = (node, queue) => {
  if (node.left) queue.push(node.left);
  if (node.right) queue.push(node.right);
};
