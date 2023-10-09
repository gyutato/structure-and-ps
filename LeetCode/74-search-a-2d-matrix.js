/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let concatArr = [];
  for (let i = 0; i < matrix.length; i++) {
    concatArr = concatArr.concat(matrix[i]);
  }

  let lo = 0,
    hi = concatArr.length - 1,
    mid;
  while (lo < hi) {
    mid = lo + Math.floor((hi - lo) / 2);
    if (target > concatArr[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  mid = lo + Math.floor((hi - lo) / 2);
  return concatArr[mid] === target;
};
