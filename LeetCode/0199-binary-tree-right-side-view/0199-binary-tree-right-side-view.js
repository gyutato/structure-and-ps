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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = [];
  const queue = [];

  queue.push(root);
  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (!node) break;

      if (i === size - 1) {
        res.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return res;
};
