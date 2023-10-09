/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;
  let mid = 0;

  while (lo < hi) {
    mid = lo + Math.floor((hi - lo) / 2);
    if (target > nums[mid]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  mid = lo + Math.floor((hi - lo) / 2);
  return nums[mid] === target ? mid : -1;
};
